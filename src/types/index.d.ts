interface Node {
	id: string | number
	label: string
	group: string
}

interface Edge {
	id?: undefined
	from: number | string
	to: number | string
}

interface MyNode {
	id: number
	active: boolean
	label: string
	title?: string
	desc?: string
	first: boolean
	last: boolean
	StartCondition: number
	group: string
	level?: number
}
