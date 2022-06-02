import { defineStore } from 'pinia'
import { nod, edg } from '@/stores/dataGraph.ts'

export const useGraph = defineStore({
	id: 'graph',
	state: () => ({
		nodeSelection: [],
		edgeSelection: [],
		nodes: nod,
		edges: edg,
	}),
	getters: {
		selected() {
			return this.nodeSelection.length > 0
		},
	},

	actions: {},
})
