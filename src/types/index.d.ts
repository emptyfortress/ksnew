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

interface MyNode {
	id: number
	active: boolean
	label: string
	title?: string
	first: boolean
	last: boolean
	StartCondition: number
	group: string
	level?: number
}
