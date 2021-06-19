import { useState } from "react"
import { useRouteMatch } from "react-router"

export default function APIKey(props) {
	
	const matched = useRouteMatch(['/'])
	const [message, setMessage] = useState()

	function submitData(e) {
		e.preventDefault()
		var tokenValue = document.getElementById('apiKeyInput').value
		setMessage('')

		if (tokenValue === ''){
			localStorage.setItem('token', '')
			props.getRateLimit()
			return
		}
		
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
					props.getRateLimit()
				}
				else{
					setMessage(json.message)
				}
			})
	}

	if (matched && matched.isExact) {
		return (
			<form onSubmit={(e) => submitData(e)}>
				<input type='text' placeholder='ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ' id='apiKeyInput' defaultValue={localStorage.getItem('token') ? localStorage.getItem('token').replace('token ', '') : null}/>
				<p style={{marginTop: 0}}>{message}</p>
				<input type='submit' />
			</form>
		)
	}
	return(null)
}
