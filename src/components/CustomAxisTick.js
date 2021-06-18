export default function CustomAxisTick(props) {
	return (
		<g transform={`translate(${props.x},${props.y})`}>
			<text x={0} y={15} textAnchor="start" fill="black" transform='rotate(45)' style={{zIndex: 100}}>
				{props.payload.value}
			</text>
		</g>
	)
}