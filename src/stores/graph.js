import { defineStore } from 'pinia'
// import { nod, edg } from '@/stores/dataGraph.ts'

export const useGraph = defineStore({
	id: 'graph',
	state: () => ({
		nodeSelection: 1000,
		edgeSelection: [],
		// nodes: nod,
		// edges: edg,
	}),
	getters: {
		selected() {
			return this.nodeSelection !== 1000
		},
		// number() {
		// 	return this.nodeSelection[0]
		// },
		// current() {
		// 	return this.nodes[this.number]
		// },
	},

	actions: {
		setCurrentNode(e) {
			this.nodeSelection = e
			// this.nodeSelection.push(e)
		},
	},
})
