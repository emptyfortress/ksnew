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
		marsh: 1,
		nodes: nodes1,
		edges: edges1,
	}),
	getters: {
		test() {
			return 'fuck'
		},
		selected() {
			return this.nodeSelection !== 1000
		},
		selectedNode() {
			return this.nodes[this.nodeSelection]
		},
		activeEtaps() {
			return this.nodes
				.filter((e) => e.first !== true && e.last !== true)
				.filter((e) => e.active === true)
				.map((item) => {
					return item.id
				})
		},
		// nodes() {
		// 	switch (this.marsh) {
		// 		case 1:
		// 			return nodes1
		// 		case 2:
		// 			return nodes2
		// 		case 3:
		// 			return nodes3
		// 		default:
		// 			return nodes1
		// 	}
		// },
		// edges() {
		// 	switch (this.marsh) {
		// 		case 1:
		// 			return edges1
		// 		case 2:
		// 			return edges2
		// 		case 3:
		// 			return edges3
		// 		default:
		// 			return edges1
		// 	}
		// },
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
		setMarsh(e) {
			this.marsh = e
		},
		// setNodes1() {
		// 	this.nodes = nodes1
		// 	this.edges = edges1
		// },
		// setNodes2() {
		// 	this.nodes = nodes2
		// 	this.edges = edges2
		// },
		// setNodes3() {
		// 	this.nodes = nodes3
		// 	this.edges = edges3
		// },
	},
})
