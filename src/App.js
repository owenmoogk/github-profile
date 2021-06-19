import RepoPage from './components/RepoPage'
import UserPage from './components/UserPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './styles.css'
import { useEffect, useState } from 'react'
import BackButton from './components/homepage/BackButton'
import APIKey from './components/homepage/APIKey'

export default function App() {

	const [emojis, setEmojis] = useState()
	const [colors, setColors] = useState()
	const [rateRemaining, setRateRemaining] = useState()
	const [rateTotal, setRateTotal] = useState()
	const [errorMessage, setErrorMessage] = useState()
	const [showRateLimitModal, setShowRateLimitModal] = useState()

	function makeRequest(url, variableSetter) {
		fetch(url)
			.then(response => response.json())
			.then(data => variableSetter(data))
	}

	function getRateLimit() {
		var data = {}
		if (localStorage.getItem('token')){
			data = {
				headers:{
					authorization: localStorage.getItem('token')
				}
			}
		}

		fetch("https://api.github.com/rate_limit", data)
			.then(response => response.json())
			.then(json => {
				setRateRemaining(json.rate.remaining)
				setRateTotal(json.rate.limit)
			})
	}

	function makeGithubRequest(url, variableSetter) {
		var data = {}
		if (localStorage.getItem('token')){
			data = {
				headers:{
					authorization: localStorage.getItem('token')
				}
			}
		}

		fetch(url, data)
			.then(response => response.json())
			.then(json => variableSetter(json))
			.then(getRateLimit())
	}

	function submitData(e) {
		e.preventDefault()
		setErrorMessage('')
		var input = document.getElementById('mainInput').value
		if (input.includes('/')) {
			var array = input.split('/')
			window.location.href = "/" + array[0] + "/" + array[1]
		}
		else {
			window.location.href = '/' + input
		}
	}

	function notFoundError() {
		setErrorMessage("Couldn't find that :(")
		return (<Redirect to='/' />)
	}

	useEffect(() => {
		makeRequest(process.env.PUBLIC_URL + "/colors.json", setColors)
		makeRequest(process.env.PUBLIC_URL + '/emojis.json', setEmojis)
		getRateLimit()
	}, [])

	function clickedOffModal(e){
		var modal = document.getElementById('rateLimitModal')
		if (e.target === modal){
			setShowRateLimitModal(false)
		}
	}

	return (
		<Router>
			<div>
				<div id='rateLimit'>
					<svg onClick={() => setShowRateLimitModal(true)} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><circle cx="12" cy="12" r="10" stroke="gray" strokeWidth="2" /><path d="M11.5 7h.5" stroke="gray" strokeWidth="2" strokeLinecap="round" /><path d="M10 11h2v5" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 16h4" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
					<p><span>{rateRemaining}/{rateTotal}</span><br />Requests</p>
				</div>
				<div id='rateLimitModal' style={{ display: showRateLimitModal ? '' : 'none' }} onClick={(e) => clickedOffModal(e)}>
					<div className="modal-content">
						<span className="close" onClick={() => setShowRateLimitModal(false)}>&times;</span>
						<p style={{fontSize: '20px'}}>This website was built using the Github API. The Github API is super powerful, but limits an IP address to 60 requests per hour. If you have a github account, you can get an API key <a href='https://github.com/settings/tokens' target='_blank' rel='noreferrer'>here</a> to get many more requests, (typically 5000). If you would like to, enter it below. (this is a Frontend app using Local Storage, so no need to worry about security issues, it never leaves your computer).</p>
						<APIKey getRateLimit={getRateLimit}/>
					</div>
				</div>
				<BackButton />
			</div>
			<Switch>
				<Route path="/:username/:repo">
					<RepoPage colors={colors} emojis={emojis} makeGithubRequest={makeGithubRequest} notFoundError={notFoundError} />
				</Route>
				<Route path='/:username'>
					<UserPage colors={colors} emojis={emojis} makeGithubRequest={makeGithubRequest} notFoundError={notFoundError} />
				</Route>
				<Route path='/'>
					<div id='homepage'>
						<h1>Github Profile</h1>
						<form onSubmit={(e) => submitData(e)}>
							<input type='text' placeholder='User or repository' id='mainInput' />
							<input type='submit' style={{ display: 'none' }} />
						</form>
						<h2 id='notFoundError'>{errorMessage}</h2>
					</div>
				</Route>
			</Switch>
		</Router>
	);
}
