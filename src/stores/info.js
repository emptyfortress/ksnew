import { defineStore } from 'pinia'
import { nodes, edges } from '@/stores/json1'

export const useInfo = defineStore({
	id: 'info',
	state: () => ({
		infoDrawer: true,
		ksDrawer: true,
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
		selectedNode() {
			return this.nodes[this.nodeSelection]
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
		toggleNode() {
			this.nodes[this.nodeSelection].active = !this.nodes[this.nodeSelection].active
		},
	},
})
