import { useEffect, useState } from "react";
import React from 'react'
import { useParams } from "react-router";
import GithubCard from "./GithubCard";
import { PieChart } from "react-minimal-pie-chart";

/* eslint-disable react-hooks/exhaustive-deps */
export default function RepoPage(props) {

	let { username, repo } = useParams()
	
	const [data, setData] = useState()
	const [languageData, setLanguageData] = useState()

	const [selected, setSelected] = useState()

	useEffect(() => {
		props.makeGithubRequest('https://api.github.com/repos/' + username + '/' + repo, setData)
	}, [username, repo]);

	useEffect(() => {
		if (data) {
			props.makeGithubRequest(data.languages_url, setLanguageData)
		}
	}, [data])

	function renderChart() {
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
						Object.entries(languageData).map(([language, value]) => {
							return (
								<div>
									<span style={{ 'width': '14px', 'height': '14px', 'borderRadius': '100%', 'backgroundColor': props.colors[language].color, 'display': 'inline-block', 'top': '1px', 'position': 'relative' }}></span>&nbsp;
									<span class='language'>{language}</span>
								</div>
							)
						})
					}
				</div>
			</div>

		)
	}

	function mainPage() {

		// date parsing
		var created_at = new Date(Date.parse(data.created_at))
		var date = created_at.toLocaleString('default', { month: 'long', day: "numeric", year: 'numeric' })

		return (
			<div id='repoPage'>
				<div id="left">
					<div id='title'>
						<h1>{data.name}</h1>
						<h2>
							<a href={"https://github.com/" + data.owner.login} target='blank'>@{data.owner.login}</a>/<a href={'https://github.com/' + data.owner.login + '/' + data.name} target='_blank'>{data.name}</a>
						</h2>
						{
							data.fork
								? <p className='info'>
									<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo-forked" style={{ fill: 'currentcolor' }}>
										<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
									</svg>&nbsp;Forked from
									<a style={{
										'color': 'inherit',
										'textDecoration': 'none'
									}} href={data.fork ? data.source.html_url : ''}>{data.fork ? data.source.full_name : ''}</a></p>
								: null
						}
						<div id='stats'>
							<div className='stat'>
								<span>{data.stargazers_count}</span>
								Stars
							</div>
							<div className='stat'>
								<span>{data.forks}</span>
								Forks
							</div>
							<div className='stat'>
								<span>{data.subscribers_count}</span>
								Watchers
							</div>
						</div>

						<br />

						<p className='info'>
							<svg aria-hidden="true" height="18" role="img" viewBox="0 0 14 16" width="16" style={{ fill: 'currentcolor' }}><path fillRule="evenodd" d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"></path></svg> &nbsp;Created {date}
						</p>
						{
							data.has_pages
								? <p className='info'>
									<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon octicon-link" style={{ fill: 'currentcolor' }}><path fillRule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" /></svg> &nbsp;<a href={'https://' + username + ".github.io/" + repo} target='_blank' rel='noreferrer'>Github Pages</a>
								</p>
								: null
						}
					</div>
					{
						Object.entries(languageData).length === 0
							? null
							: renderChart()
					}
					<div id='data'>
						<GithubCard data={data} colors={props.colors} emojis={props.emojis} user={username} link='external' />
					</div>
				</div>

			</div>
		)
	}

	return (
		data && props.colors && props.emojis
			? data.id
				? languageData
					? mainPage()
					: null
				: props.notFoundError()
			: null
	);
}
