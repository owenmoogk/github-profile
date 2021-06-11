import { useEffect, useState } from "react";
import React from 'react'
import { useParams } from "react-router";
import GithubCard from './GithubCard'

export default function UserPage(props) {

	let { username } = useParams()

	const [userData, setUserData] = useState()
	const [userRepos, setUserRepos] = useState()

	useEffect(() => {
		props.makeGithubRequest("https://api.github.com/users/" + username, setUserData)
		props.makeGithubRequest("https://api.github.com/users/" + username, setUserRepos)
	}, [props, username]);

	return (
		<div id='userPage'>
			<div id="left">
				<div id='userData'>
					<img src={"https://owenmoogk.codes/img/projects/pathfinding-visualizer/main.png"} />
					<div id='userText'>
						<h1>Owen Moogk</h1>
						<h2>
							<a href="https://owenmoogk.codes" target='blank'>@owenmoogk</a>
						</h2>
						<div id='userStats'>
							<div class='userStat'>
								<span>16</span>
								Followers
							</div>
							<div class='userStat'>
								<span>48</span>
								Repositories
							</div>
							<div class='userStat'>
								<span>98</span>
								Following
							</div>
						</div>
						<div class='userInfos'>
							<p class='userInfo'>
								<svg aria-hidden="true" height="18" role="img" viewBox="0 0 14 16" width="16" style={{ fill: 'currentcolor' }}><path fill-rule="evenodd" d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"></path></svg> &nbsp;Joined December
							</p>
							<p class='userInfo'>
								<svg aria-hidden="true" class="octicon" height="16" role="img" viewBox="0 0 12 16" width="12" style={{ fill: 'currentcolor' }}><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg> &nbsp;Waterloo lol
							</p>
							<p class='userInfo'>
								<svg aria-hidden="true" class="octicon" height="16" role="img" viewBox="0 0 14 16" width="14" style={{ fill: 'currentcolor' }}><path fill-rule="evenodd" d="M9 4V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H9zM6 3h2v1H6V3zm7 6H8v1H6V9H1V5h1v3h10V5h1v4z"></path></svg> &nbsp;i work at google ok
							</p>
						</div>
						<div class='userInfos'>
							<p class='userInfo'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" height='18' width='16' class="octicon"><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path></svg> &nbsp;Waterloo lol
							</p>
							<p class='userInfo'>
								<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-link" style={{fill:'currentcolor'}}><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/>
								</svg> &nbsp;owenmoogk.codes
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id="right">
				<div id='search'>
					<input type='text' placeholder='Search for a repository'></input>
				</div>
				<div id='githubCards'>
					<GithubCard />
					<GithubCard />
					<GithubCard />
					<GithubCard />
					<GithubCard />
					<GithubCard />
					<GithubCard />
					<GithubCard />
					<GithubCard />
					<GithubCard />
				</div>
			</div>
		</div>
	);
}