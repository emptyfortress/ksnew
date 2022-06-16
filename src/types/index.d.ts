interface Node {
	id: string | number
	label: string
	group: string
}

interface Edge {
	from: number
	to: number
	color: string
	title?: string
	semantics: number
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
