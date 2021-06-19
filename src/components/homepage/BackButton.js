import { useRouteMatch } from "react-router"

export default function BackButton() {

	const matched = useRouteMatch(['/'])

	if (!(matched && matched.isExact)) {
		return (
			<a href='/' id='back'>
				<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="50px" height="50px" style={
					{
						'-ms-transform': 'rotate(360deg)',
						'-webkit-transform': 'rotate(360deg)',
						'transform': 'rotate(360deg)',
						fill: 'white'
					}
				} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9.059V6.5a1.001 1.001 0 0 0-1.707-.708L4 12l6.293 6.207a.997.997 0 0 0 1.414 0A.999.999 0 0 0 12 17.5v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z" /></svg>
			</a>
		)
	}

	return null

}