import RepoPage from './components/RepoPage'
import UserPage from './components/UserPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles.css'
import { useEffect, useState } from 'react'

export default function App() {
	
	const [emojis, setEmojis] = useState()
	const [colors, setColors] = useState()
	const [rateRemaining, setRateRemaining] = useState()
	const [rateTotal, setRateTotal] = useState()
	
	function makeRequest(url, variableSetter){
		fetch(url)
			.then(response => response.json())
			.then(data => variableSetter(data))
	}
	
	function getRateLimit(){
		fetch("https://api.github.com/rate_limit", {
		})
			.then(response => response.json())
			.then(json => {
				setRateRemaining(json.rate.remaining)
				setRateTotal(json.rate.limit)
			})
	}

	function makeGithubRequest(url, variableSetter){
		fetch(url, {
		})
			.then(response => response.json())
			.then(json => variableSetter(json))
			.then(getRateLimit())
	}

	function submitData(e) {
		e.preventDefault()

		var input = document.getElementById('mainInput').value
		if (input.includes('/')) {
			var array = input.split('/')
			window.location.href = "/"+array[0]+"/"+array[1]
		}
		else {
			window.location.href = '/'+input
		}
	}

	useEffect(() => {
		makeRequest(process.env.PUBLIC_URL+"/colors.json", setColors)
		makeRequest(process.env.PUBLIC_URL+'/emojis.json', setEmojis)
		getRateLimit()
	}, [])

	return (
		<Router>
			<p id='rateLimit'><span>{rateRemaining}/{rateTotal}</span><br/>Requests</p>
			<Switch>
				<Route path="/:username/:repo"><RepoPage colors={colors} emojis={emojis} makeGithubRequest={makeGithubRequest} /></Route>
				<Route path='/:username'><UserPage colors={colors} emojis={emojis} makeGithubRequest={makeGithubRequest}/></Route>
				<Route path='/'>
					<div id='homepage'>
						<h1>Github Profile</h1>
						<form onSubmit={(e) => submitData(e)}>
							<input type='text' placeholder='User or repository' id='mainInput' />
							<input type='submit' style={{ display: 'none' }} />
						</form>
					</div>
				</Route>
			</Switch>
		</Router>
	);
}
