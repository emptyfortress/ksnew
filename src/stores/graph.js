import { defineStore } from 'pinia'
import { nodes, edges } from '@/stores/json1'

export const useGraph = defineStore({
	id: 'graph',
	state: () => ({
		nodeSelection: 1000,
		edgeSelection: [],
		nodes: nodes,
		edges: edges,
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
