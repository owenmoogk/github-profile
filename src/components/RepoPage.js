import { useEffect, useState } from "react";
import React from 'react'
import { useParams } from "react-router";

export default function GithubCard(props) {

	let {username, repo} = useParams()
	const [data, setData] = useState()

	useEffect(() => {
		props.makeGithubRequest('https://api.github.com/repos/'+username+'/'+repo, setData)
	}, [props, username, repo]);

	return (
		<div>
			
		</div>
	);
}
