import { defineStore } from 'pinia'
import { nod, edg } from '@/stores/dataGraph'

export const useGraph = defineStore({
	id: 'graph',
	state: () => ({
		nodeSelection: [],
		edgeSelection: [],
		nodes: nod,
		edges: edg,
	}),
	getters: {},

	actions: {},
})
