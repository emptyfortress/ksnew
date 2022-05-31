interface Node {
	id: string | number
	label: string
	group: string
}

interface Edge {
	id?: undefined
	from: number
	to: number
}
