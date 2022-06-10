import { defineStore } from 'pinia'
import { nodes, edges } from '@/stores/json1'

export const useInfo = defineStore({
	id: 'info',
	state: () => ({
		infoDrawer: false,
		ksDrawer: false,
		etaps: [],
		nodeSelection: 1000,
		edgeSelection: [],
		nodes: nodes,
		edges: edges,
	}),
	getters: {
		selected() {
			return this.nodeSelection !== 1000
		},
	},
	actions: {
		closeAll() {
			this.infoDrawer = false
			this.ksDrawer = false
		},
		closeInfo() {
			this.infoDrawer = false
		},
		toggle() {
			this.infoDrawer = !this.infoDrawer
		},
		toggleks() {
			this.ksDrawer = !this.ksDrawer
		},
		setEtaps(e) {
			this.etaps = e
		},
		setCurrentNode(e) {
			this.nodeSelection = e
		},
	},
})
