import React from 'react'
import { Link } from 'react-router-dom/dist'

export default function GithubCard(props) {

	var data = props.data
	var emojis = props.emojis
	var colors = props.colors
	var description;

	var size = data.size
	let arrayOfNums = size.toString().split("");
	size = ''
	var counter = arrayOfNums.length % 3
	if (arrayOfNums.length == 4) {
		var counter = 4
	}
	for (const num of arrayOfNums) {
		if (counter <= 0) {
			size += ' '
			counter = 3
		}
		size += num
		counter -= 1
	}


	function showOnSearch(searchValue) {
		searchValue = searchValue.toLowerCase()
		if (data.name.toLowerCase().includes(searchValue)) {
			return (true)
		}
		if (data.language) {
			if (data.language.toLowerCase().includes(searchValue)) {
				return (true)
			}
		}
		if (data.description) {
			if (data.description.toLowerCase().includes(searchValue)) {
				return (true)
			}
		}
		return (false)
	}

	description = (data.description || '').replace(/:\w+:/g, function (match) {
		const name = match.substring(1, match.length - 1);
		const emoji = emojis[name];

		if (emoji) {
			return `<span><img src='${emoji}' style='width: 1rem; height: 1rem; vertical-align: -0.2rem;'></span>`;
		}

		return match;
	})

	return (
		<div>
			<div className='ghCard' style={{
				'fontFamily': '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
				'border': '1px solid #e1e4e8',
				'borderRadius': '6px',
				'background': 'white',
				'padding': '16px',
				'fontSize': '14px',
				'lineHeight': '1.5',
				'color': '#24292e',
				'width': '300px',
				'display':
					props.searchValue
						? showOnSearch(props.searchValue)
							? 'inherit'
							: 'none'
						: props.display
							? props.display
							: 'inherit'
			}}>
				<div style={{
					'display': 'flex',
					'alignItems': 'center'
				}}>
					<svg style={{
						'fill': '#586069',
						'marginRight': '8px'
					}} viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'><path fillRule='evenodd' d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'></path></svg>
					<span style={{
						'fontWeight': '600',
						'color': '#0366d6'
					}}>
						{props.link === "external"
							? <a style={{
									'textDecoration': 'none',
									'color': 'inherit'
								}} href={"https://github.com/" + props.user + "/" + data.name} target="_blank" rel='noreferrer'>
									{data.name}
								</a>
							: <Link to={'/' + props.user + '/' + data.name} style={{
									'textDecoration': 'none',
									'color': 'inherit'
								}}>
									{data.name}
								</Link>
						}
					</span>
				</div>
				{
					props.link === 'external'
						? <div style={{
							'display': data.fork ? 'block' : 'none',
							'fontSize': '12px',
							'color': '#586069'
						}}>Forked from
							<a style={{
								'color': 'inherit',
								'textDecoration': 'none'
							}} href={data.fork ? data.source.html_url : ''}>{data.fork ? data.source.full_name : ''}</a></div>
						: null
				}
				<div style={{ 'fontSize': '12px', 'marginBottom': '16px', 'marginTop': '8px', 'color': '#586069' }} dangerouslySetInnerHTML={{ __html: description }}></div>
				<div style={{ 'fontSize': '12px', 'color': '#586069', 'display': 'flex', justifyContent: 'space-between' }}>
					<div style={{ display: 'flex' }}>
						<div style={{ 'display': data.language ? '' : 'none', 'marginRight': '16px' }}>
							<span style={{
								'width': '12px', 'height': '12px', 'borderRadius': '100%', 'backgroundColor':
									data.language
										? colors[data.language]
											? colors[data.language].color
											: 'grey'
										: '', 'display': 'inline-block', 'top': '1px', 'position': 'relative'
							}}></span>
							<span> {data.language}</span>
						</div>
						<div style={{ 'display': data.stargazers_count === 0 ? 'none' : 'flex', 'alignItems': 'center', 'marginRight': '16px' }}>
							<svg style={{ 'fill': '#586069' }} aria-label='stars' viewBox='0 0 16 16' version='1.1' width='16' height='16' role='img'><path fillRule='evenodd' d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z'></path></svg>
							&nbsp; <span>{data.stargazers_count}</span>
						</div>
						<div style={{ 'display': data.forks === 0 ? 'none' : 'flex', 'alignItems': 'center' }}>
							<svg style={{ 'fill': '#586069' }} aria-label='fork' viewBox='0 0 16 16' version='1.1' width='16' height='16' role='img'><path fillRule='evenodd' d='M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z'></path></svg>
							&nbsp; <span>{data.forks}</span>
						</div>
					</div>
					<div>
						{size} KB
					</div>
				</div>
			</div>
		</div>

	)
}