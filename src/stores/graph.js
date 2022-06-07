import { defineStore } from 'pinia'
// import { nod, edg } from '@/stores/dataGraph.ts'

export const useGraph = defineStore({
	id: 'graph',
	state: () => ({
		nodeSelection: [],
		edgeSelection: [],
		// nodes: nod,
		// edges: edg,
	}),
	getters: {
		selected() {
			return this.nodeSelection.length > 0
		},
		number() {
			return this.nodeSelection[0]
		},
		// current() {
		// 	return this.nodes[this.number]
		// },
	},

	actions: {
		setCurrentNode(e) {
			this.nodeSelection = []
			this.nodeSelection.push(e)
		},
	},
})
