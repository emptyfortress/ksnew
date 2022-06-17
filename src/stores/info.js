import { defineStore } from 'pinia'
import { nodes1, edges1 } from '@/stores/json1'
import { nodes2, edges2 } from '@/stores/json2'
import { nodes3, edges3 } from '@/stores/json3'

export const useInfo = defineStore({
	id: 'info',
	state: () => ({
		infoDrawer: true,
		ksDrawer: false,
		etaps: [],
		nodeSelection: 1000,
		edgeSelection: [],
		nodes: nodes1,
		edges: edges1,
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
		setNodes1() {
			this.nodes = nodes1
			this.edges = edges1
		},
		setNodes2() {
			this.nodes = nodes2
			this.edges = edges2
		},
		setNodes3() {
			this.nodes = nodes3
			this.edges = edges3
		},
	},
})
