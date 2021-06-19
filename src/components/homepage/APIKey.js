import { useEffect, useState } from "react"
import { useRouteMatch } from "react-router"

export default function APIKey(props) {
	
	const matched = useRouteMatch(['/'])
	const [message, setMessage] = useState()
	const [currentToken, setCurrentToken] = useState()

	function submitData(e) {
		e.preventDefault()
		var tokenValue = document.getElementById('apiKeyInput').value
		setMessage('')
		
		// testing if valid key
		fetch("https://api.github.com/rate_limit", {
			headers:{
				authorization: 'token '+tokenValue
			}
		})
			.then(response => response.json())
			.then(json => {
				if (json.rate){
					localStorage.setItem('token', 'token '+tokenValue)
					setCurrentToken(tokenValue)
					document.getElementById('apiKeyInput').value = ''
					props.getRateLimit()
				}
				else{
					setMessage(json.message)
				}
			})
	}

	useEffect(() => {
		setCurrentToken(localStorage.getItem('token').replace('token ', ''))
	}, [])

	if (matched && matched.isExact) {
		return (
			<form onSubmit={(e) => submitData(e)}>
				<span>Current Token: <br/>{currentToken ? currentToken : 'None'}</span>
				<br/>
				<input type='text' placeholder='ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ' id='apiKeyInput' />
				<br/><br/>
				<p style={{marginTop: 0}}>{message}</p>
				<input type='submit'/>
			</form>
		)
	}
	return(null)
}
