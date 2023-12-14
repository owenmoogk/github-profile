import { useEffect, useState } from "react";
import React from 'react'
import { useParams } from "react-router";
import { PieChart } from "react-minimal-pie-chart";
import { BarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid } from "recharts";
import CustomAxisTick from "../CustomAxisTick";
import GithubCard from "./GithubCard";
import { toPng } from "html-to-image";
import download from "downloadjs";
import GithubCorner from "./GithubCorner";
import { Link } from "react-router-dom/dist";

/* eslint-disable react-hooks/exhaustive-deps */
export default function RepoPage(props) {

	let { username, repo } = useParams()

	const [data, setData] = useState()
	const [languageData, setLanguageData] = useState()
	const [contributorData, setContributorData] = useState()
	const [selected, setSelected] = useState()

	const [page, setPage] = useState('data')

	const [includeZeros, setIncludeZeros] = useState()
	const [includeUsername, setIncludeUsername] = useState()

	const [backgroundColor, setBackgroundColor] = useState('black')
	const [cornerColor, setCornerColor] = useState('white')
	const [align, setAlign] = useState()
	const [size, setSize] = useState(100)
	const [newTab, setNewTab] = useState(false)

	// first data request
	useEffect(() => {
		props.makeGithubRequest('https://api.github.com/repos/' + username + '/' + repo, setData)
	}, [username, repo]);

	// requests for subdata
	useEffect(() => {
		if (data) {
			props.makeGithubRequest(data.languages_url, setLanguageData)
			props.makeGithubRequest(data.contributors_url + '?per_page=10', setContributorData).catch(error => {
				setContributorData([])

			})
		}
	}, [data])

	function titleIcons() {

		// date parsing
		var created_at = new Date(Date.parse(data.created_at))
		var date = created_at.toLocaleString('default', { month: 'long', day: "numeric", year: 'numeric' })

		return (
			<p className='info'>
				<span>
					<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="20" width="16" className="octicon octicon-repo-forked" style={{ fill: 'currentcolor' }}>
						<path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
					</svg> {data.forks}
				</span>
				<span>
					<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="20" width="16" className="octicon octicon-star mr-1" style={{ fill: 'currentcolor' }}>
						<path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
					</svg> {data.stargazers_count}
				</span>
				<span>
					<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="20" width="16" style={{ fill: 'currentcolor' }} className="octicon octicon-eye">
						<path fillRule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
					</svg> {data.subscribers_count}
				</span>
				<br />
				{
					data.fork
						? <span>
							<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon octicon-repo-forked" style={{ fill: 'currentcolor' }}>
								<path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
							</svg>&nbsp;Forked from&nbsp;
							<a style={{
								'textDecoration': 'none'
							}} href={data.fork ? data.source.html_url : ''} target='_blank' rel='noreferrer'>{data.fork ? data.source.full_name : ''}</a><br /></span>
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
				<h1>{data.name}</h1>
				<h2>
					<a href={"https://github.com/" + data.owner.login} target='_blank' rel="noreferrer">@{data.owner.login}</a>/<a href={'https://github.com/' + data.owner.login + '/' + data.name} target='_blank' rel='noreferrer'>{data.name}</a>
				</h2>

				{titleIcons()}
			</div>
		)
	}

	function renderData() {

		function renderLanguageChart() {
			return (
				<div id='languageChart'>
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
										{
											title: language, value: value, color:
												props.colors[language]
													? props.colors[language].color
													: 'grey'
										}
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
										<span style={{
											'width': '14px', 'height': '14px', 'borderRadius': '100%', 'backgroundColor':
												props.colors[language]
													? props.colors[language].color
													: 'grey'
											,
											'display': 'inline-block', 'top': '1px', 'position': 'relative'
										}}></span>&nbsp;
										<span className='language'>{language}</span>
									</div>
								)
							})
						}
					</div>
				</div>

			)
		}

		function renderContributorChart() {

			var width = contributorData.length * 65

			if (width < 400) {
				width = 400
			}

			return (
				<BarChart width={width} height={350} data={contributorData} margin={{ right: 20 }}>
					<CartesianGrid stroke='grey' strokeDasharray="5 5" />
					<XAxis stroke='white' dataKey="login" interval={0} tick={<CustomAxisTick />} overflow='display' height={100} />
					<YAxis stroke='white' />
					<Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} cursor={{ fill: 'rgb(30, 35, 40)', stroke: 'grey' }} />
					<Bar dataKey="contributions" fill="#8884d8" />
				</BarChart>
			)
		}

		return (
			<div id='dataPage'>
				{Object.entries(languageData).length !== 0
					? <div className='dataCard' id='languageCard'>
						<h2>
							Languages
						</h2>
						{renderLanguageChart()}
					</div>
					: null
				}


				<div id='contributors' className='dataCard'>
					<h2>
						Top Contributors
					</h2>
					<div id='contributorList'>
						{contributorData.map((user, i) => {
							return (
								<Link key={i} to={"/"+user.login}>
									<img src={user.avatar_url} alt='' />
									<span> &nbsp; {user.login}</span>
								</Link>
							)
						})}
					</div>
				</div>

				<div id='contributorChart' className='dataCard'>
					<h2>
						Contributions
					</h2>
					{renderContributorChart()}
				</div>
			</div>
		)
	}

	function renderComponents() {

		function downloadCardImage() {
			var node = document.getElementById('cardContainer')
			toPng(node)
				.then(function (dataUrl) {
					download(dataUrl, repo + '.png');
				})
				.catch(function (error) {
					console.error('oops, something went wrong!', error);
				});
		}

		function downloadCornerImage() {
			var node = document.getElementById('cornerImage')
			toPng(node)
				.then(function (dataUrl) {
					download(dataUrl, repo + '-corner.png');
				})
				.catch(function (error) {
					console.error('oops, something went wrong!', error);
				});
		}

		function copyCardHtml() {
			var node = document.getElementById('cardContainer')
			var input = document.getElementById('cardHtml')

			// we have to show the input, select and copy, and then hide the input for it to work
			// we cant copy with 'display':'none'
			input.style.display = 'block'
			input.value = node.innerHTML
			input.select()
			document.execCommand('copy')
			input.style.display = 'none'
		}

		function copyCornerHtml() {
			var node = document.getElementById('cornerImage')
			var input = document.getElementById('cardHtml')

			// we have to show the input, select and copy, and then hide the input for it to work
			// we cant copy with 'display':'none'
			input.style.display = 'block'
			input.value = node.innerHTML
			input.select()
			document.execCommand('copy')
			input.style.display = 'none'
		}

		function loadGithubCard() {
			return (
				<div id='cardComponent'>
					<h2>Github Cards</h2>
					<div id='cardContainer'>
						<GithubCard data={data} colors={props.colors} emojis={props.emojis} username={username} link='external' includeUsername={includeUsername} includeZeros={includeZeros} />
					</div>

					<div id='cardOptions'>

						<div id='options'>
							<div>
								<input type="checkbox" id='includeUsername' onChange={(e) => setIncludeUsername(e.target.checked)} />
								<label htmlFor='includeUsername'>Include Username</label>
							</div>
							<div>
								<input type="checkbox" id='includeZeros' onChange={(e) => setIncludeZeros(e.target.checked)} />
								<label htmlFor='includeZeros'>Include Zeros</label>
							</div>
						</div>

						<div id='downloadButtons'>
							{/* download svg */}
							<abbr title='Download PNG'>
								<svg width="3em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" onClick={() => downloadCardImage()}>
									<path d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2z" />
									<path d="M18 29.48l10.61-10.61a1 1 0 0 0-1.41-1.41L19 25.65V5a1 1 0 0 0-2 0v20.65l-8.19-8.19a1 1 0 1 0-1.41 1.41z" />
								</svg>
							</abbr>

							{/* embed svg */}
							<abbr title='Copy HTML to Clipboard'>
								<svg width="3em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 30 24" onClick={() => copyCardHtml()}>
									<path d="M13 11.5l1.5 1.5l5-5l-5-5L13 4.5L16.5 8z" />
									<path d="M7 4.5L5.5 3l-5 5l5 5L7 11.5L3.5 8z" />
									<path d="M10.958 2.352l1.085.296l-3 11l-1.085-.296l3-11z" />
								</svg>
							</abbr>
						</div>
					</div>
				</div>
			)
		}

		function loadGithubCorner() {
			return (
				<div id='cornerComponent'>
					<h2>Github Corners</h2>

					<div id='githubCornerContainer' style={{ height: '125px', width: '125px' }}>
						<GithubCorner href={data.html_url} size={size} color={cornerColor} backgroundColor={backgroundColor} newTab={newTab} align={align} />
					</div>

					<div id='cardOptions' style={{ zIndex: 10 }}>

						<div id='options'>
							<div>
								<input type="radio" name="position" id='left' value="left" onClick={() => setAlign('left')} />
								<label htmlFor="left">Left</label>
							</div>

							<div>
								<input type="radio" name="position" id='right' value="right" onClick={() => setAlign('right')} />
								<label htmlFor="right">Right</label>
							</div>

							<br />

							<div>
								<input type="checkbox" id='newTab' onChange={(e) => setNewTab(e.target.checked)} />
								<label htmlFor="newTab">Open in New Tab</label>
							</div>

							<br />

							<table>
								<tbody>
									<tr>
										<td>
											Background Color: &nbsp;
										</td>
										<td>
											<input type='text' id='backgroundColorInput' onChange={(e) => setBackgroundColor(e.target.value)} />
										</td>
									</tr>
									<tr>
										<td>
											Octocat Color:
										</td>
										<td>
											<input type='text' id='colorInput' onChange={(e) => setCornerColor(e.target.value ? e.target.value : 'black')} />
										</td>
									</tr>
									<tr>
										<td>
											Size (pixels):
										</td>
										<td>
											<input type="number" id='size' defaultValue='100' onChange={(e) => setSize(e.target.value ? e.target.value > 250 ? 250 : e.target.value : 100)} />
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div id='downloadButtons'>
							{/* download svg */}
							<abbr title='Download PNG'>
								<svg width="3em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" onClick={() => downloadCornerImage()}>
									<path d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2z" />
									<path d="M18 29.48l10.61-10.61a1 1 0 0 0-1.41-1.41L19 25.65V5a1 1 0 0 0-2 0v20.65l-8.19-8.19a1 1 0 1 0-1.41 1.41z" />
								</svg>
							</abbr>

							{/* embed svg */}
							<abbr title='Copy HTML to Clipboard'>
								<svg width="3em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 30 24" onClick={() => copyCornerHtml()}>
									<path d="M13 11.5l1.5 1.5l5-5l-5-5L13 4.5L16.5 8z" />
									<path d="M7 4.5L5.5 3l-5 5l5 5L7 11.5L3.5 8z" />
									<path d="M10.958 2.352l1.085.296l-3 11l-1.085-.296l3-11z" />
								</svg>
							</abbr>
							<input style={{ display: 'none' }} id='cardHtml' type='text' />
						</div>
					</div>
				</div>
			)
		}

		return (
			<div id='components'>

				{loadGithubCard()}

				{loadGithubCorner()}
			</div>
		)
	}

	// loading the three subpages depending on the state
	function mainPage() {

		return (
			<div id='repoPage'>
				{renderTitle()}
				<div id='buttons'>
					<button onClick={() => setPage('data')} className={'stateButton ' + (page === 'data' ? 'active' : '')}>Repo Data</button>
					<button onClick={() => setPage('components')} className={'stateButton' + (page === 'components' ? ' active' : '')}>Components</button>
				</div>

				{page === 'data'
					? renderData()
					: null
				}
				{page === 'components'
					? renderComponents()
					: null
				}
				<br /><br /><br />

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
				: props.notFoundError("Repository doesn't exist")

			: null
	);
}
