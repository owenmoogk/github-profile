import { useEffect, useState } from "react";
import React from 'react'
import { useParams } from "react-router";
import GithubCard from "./GithubCard";
import { PieChart } from "react-minimal-pie-chart";
import { BarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid } from "recharts";
import CustomAxisTick from "./CustomAxisTick";

/* eslint-disable react-hooks/exhaustive-deps */
export default function RepoPage(props) {

	let { username, repo } = useParams()

	const [data, setData] = useState()
	const [languageData, setLanguageData] = useState()
	const [contributorData, setContributorData] = useState()
	const [selected, setSelected] = useState()

	const [page, setPage] = useState('data')

	// first data request
	useEffect(() => {
		props.makeGithubRequest('https://api.github.com/repos/' + username + '/' + repo, setData)
	}, [username, repo]);

	// requests for subdata
	useEffect(() => {
		if (data) {
			props.makeGithubRequest(data.languages_url, setLanguageData)
			props.makeGithubRequest(data.contributors_url + '?per_page=10', setContributorData)
		}
	}, [data])

	function titleIcons() {

		// date parsing
		var created_at = new Date(Date.parse(data.created_at))
		var date = created_at.toLocaleString('default', { month: 'long', day: "numeric", year: 'numeric' })

		return (
			<p className='info'>
				<span>
					<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="20" width="16" class="octicon octicon-repo-forked" style={{ fill: 'currentcolor' }}>
						<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
					</svg> {data.forks}
				</span>
				<span>
					<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="20" width="16" class="octicon octicon-star mr-1" style={{ fill: 'currentcolor' }}>
						<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
					</svg> {data.stargazers_count}
				</span>
				<span>
					<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="20" width="16" style={{ fill: 'currentcolor' }} class="octicon octicon-eye">
						<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
					</svg> {data.subscribers_count}
				</span>
				<br />
				{
					data.fork
						? <p className='info'>
							<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon octicon-repo-forked" style={{ fill: 'currentcolor' }}>
								<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
							</svg>&nbsp;Forked from
							<a style={{
								'color': 'inherit',
								'textDecoration': 'none'
							}} href={data.fork ? data.source.html_url : ''}>{data.fork ? data.source.full_name : ''}</a></p>
						: null
				}
				<span>
					<svg aria-hidden="true" height="18" role="img" viewBox="0 0 14 16" width="16" style={{ fill: 'currentcolor' }}><path fillRule="evenodd" d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"></path></svg> &nbsp;Created {date}
				</span>
				{
					data.has_pages
						? <span>
							<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon octicon-link" style={{ fill: 'currentcolor' }}><path fillRule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" /></svg> &nbsp;<a href={'https://' + username + ".github.io/" + repo} target='_blank' rel='noreferrer'>Github Pages</a>
						</span>
						: null
				}
			</p>
		)
	}

	function renderTitle() {

		return (
			<div id='title'>

				<div id='titleContent'>
					<h1>{data.name}</h1>
					<h2>
						<a href={"https://github.com/" + data.owner.login} target='_blank' rel="noreferrer">@{data.owner.login}</a>/<a href={'https://github.com/' + data.owner.login + '/' + data.name} target='_blank' rel='noreferrer'>{data.name}</a>
					</h2>

					{titleIcons()}
				</div>
			</div>
		)
	}

	function renderData() {

		function renderLanguageChart() {
			return (
				<div id='chart'>
					<div id='chartContainer'>
						<PieChart
							animate={true}
							startAngle={-90}
							animationDuration={1000}
							lineWidth={25}
							paddingAngle={
								Object.entries(languageData).length > 1
									? 3
									: 0
							}
							radius={45}
							data={
								Object.entries(languageData).map(([language, value], i) => {
									return (
										{ title: language, value: value, color: props.colors[language].color }
									)
								})
							}
							segmentsStyle={{ transition: '.5s' }}
							segmentsShift={
								Object.entries(languageData).length > 1
									? (index) => (index === selected ? 5 : 0)
									: null
							}
							onMouseOver={(_, index) => {
								setSelected(index);
							}}
							onMouseOut={() => {
								setSelected(null);
							}}
						/>
					</div>
					<div id='chartLabels'>
						{
							Object.entries(languageData).map(([language, value], i) => {
								return (
									<div key={i}>
										<span style={{ 'width': '14px', 'height': '14px', 'borderRadius': '100%', 'backgroundColor': props.colors[language].color, 'display': 'inline-block', 'top': '1px', 'position': 'relative' }}></span>&nbsp;
										<span className='language'>{language}</span>
									</div>
								)
							})
						}
					</div>
				</div>

			)
		}

		return (
			<div id='dataPage'>

				<div id='chartContainer'>
					<h2>
						Languages
					</h2>
					{
						Object.entries(languageData).length === 0
							? null
							: renderLanguageChart()
					}
				</div>

				<div id='contributors'>
					<h2>
						Top Contributors
					</h2>

					<div id='contributorList'>
						{contributorData.map((user, i) => {
							return (
								<a key={i} href={user.html_url} target='_blank' rel='noreferrer'>
									<img src={user.avatar_url} alt='' />
									<span> &nbsp; {user.login}</span>
								</a>
							)
						})}

					</div>
				</div>

				<div id='contributorChart'>

					<h2>
						Contributions by User
					</h2>

					<BarChart width={730} height={350} data={contributorData} >
						<CartesianGrid stroke='grey' strokeDasharray="5 5" />
						<XAxis stroke='white' dataKey="login" interval={0} tick={<CustomAxisTick />} overflow='display' height={100} />
						<YAxis stroke='white' />
						{/* <Tooltip stroke='transparent'/> */}
						<Bar dataKey="contributions" fill="#8884d8" />
					</BarChart>

				</div>

				{/* <div id='data'>
						<GithubCard data={data} colors={props.colors} emojis={props.emojis} user={username} link='external' />
					</div> */}
			</div>
		)
	}

	function renderComponents() {
		return (null)
	}

	// loading the three subpages depending on the state
	function mainPage() {

		return (
			<div id='repoPage'>
				{renderTitle()}
				<div id='buttons'>
					<button onClick={() => setPage('data')} className={'stateButton ' + (page == 'data' ? 'active' : '')}>Data</button>
					<button onClick={() => setPage('components')} className={'stateButton' + (page == 'components' ? ' active' : '')}>Components</button>
				</div>

				{page === 'data'
					? renderData()
					: null
				}
				{page === 'components'
					? renderComponents()
					: null
				}

			</div>
		)
	}

	// loading the page or not found depending on the data
	return (
		data && props.colors && props.emojis

			// checking if it is a valid repo
			? data.id
				? languageData && contributorData
					? mainPage()
					: null
				: props.notFoundError()

			: null
	);
}
