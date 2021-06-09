import { useEffect, useState } from "react";
import React from 'react'
import { useParams } from "react-router";

export default function UserPage(props) {

	let { username } = useParams()

	const [userData, setUserData] = useState()
	const [userRepos, setUserRepos] = useState()

	useEffect(() => {
		props.makeGithubRequest("https://api.github.com/users/"+username, setUserData)
		props.makeGithubRequest("https://api.github.com/users/"+username, setUserRepos)
	}, [props, username]);

	return (
		<div>
			
		</div>
	);
}
