import RepoPage from './components/repopage/RepoPage'
import UserPage from './components/userpage/UserPage'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './styles.css'
import { useEffect, useState } from 'react'
import BackButton from './components/homepage/BackButton'
import Homepage from './components/homepage/Homepage'
import RateLimit from "./components/RateLimit"

export default function App() {

	const [emojis, setEmojis] = useState()
	const [colors, setColors] = useState()
	const [rateRemaining, setRateRemaining] = useState()
	const [rateTotal, setRateTotal] = useState()
	const [errorMessage, setErrorMessage] = useState()

	function makeRequest(url, variableSetter) {
		fetch(url)
			.then(response => response.json())
			.then(data => variableSetter(data))
	}

	function getRateLimit() {
		var data = {}
		if (localStorage.getItem('token')) {
			data = {
				headers: {
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
		if (localStorage.getItem('token')) {
			data = {
				headers: {
					authorization: localStorage.getItem('token')
				}
			}
		}

		return fetch(url, data)
			.then(response => response.json())
			.then(json => variableSetter(json))
			.then(getRateLimit())
	}

	function notFoundError(error) {
		setErrorMessage(error)
		return (<Navigate to='/' />)
	}

	useEffect(() => {
		makeRequest(process.env.PUBLIC_URL + "/colors.json", setColors)
		makeRequest(process.env.PUBLIC_URL + '/emojis.json', setEmojis)
		getRateLimit()
	}, [])


	return (
		<Router>
			<div>
				<RateLimit rateRemaining={rateRemaining} rateTotal={rateTotal} getRateLimit={getRateLimit} />
				<BackButton />
			</div>
			<Routes>
					<Route path=":username/:repo" element={<RepoPage colors={colors} emojis={emojis} makeGithubRequest={makeGithubRequest} notFoundError={notFoundError} />} />
					<Route path=':username' element={<UserPage colors={colors} emojis={emojis} makeGithubRequest={makeGithubRequest} notFoundError={notFoundError} />} />
					<Route path='' element={<Homepage errorMessage={errorMessage} notFoundError={notFoundError} />} />
			</Routes>
		</Router>
	);
}
