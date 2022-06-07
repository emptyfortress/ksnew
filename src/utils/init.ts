import { Network } from 'vis-network/standalone'
import { drawCycle } from '@/utils/ctx'
import { useGraph } from '@/stores/graph'

const initNetwork = (network: Network, magnetMode: boolean) => {
	const net = useGraph()

	// network.once('beforeDrawing', function () {
	// 	network.focus(5, {
	// 		scale: 0.1,
	// 	})
	// 	network.setOptions({
	// 		layout: { hierarchical: { enabled: true } },
	// 	})
	// })

	// network.once('afterDrawing', function () {
	// 	network.fit({
	// 		animation: true,
	// 	})
	// 	network.setOptions({
	// 		layout: { hierarchical: { enabled: false } },
	// 	})
	// 	magnetMode = false

	// 	// var clusterOptions = {
	// 	// 	joinCondition: function (nodeOptions: any) {
	// 	// 		return nodeOptions.cid === 1
	// 	// 	},
	// 	// 	clusterNodeProperties: {
	// 	// 		id: 'cidCluster',
	// 	// 		borderWidth: 1,
	// 	// 		group: 'cluster',
	// 	// 		level: 2,
	// 	// 	},
	// 	// }
	// 	// network.cluster(clusterOptions)
	// })

	network.on('beforeDrawing', function (ctx) {
		var nodeId = 4
		const bb = network.getBoundingBox(nodeId)
		const color = 'blue'
		drawCycle(ctx, bb, color)
	})

	// network.on('hoverNode', function (params) {
	// 	console.log(params.node)
	// })

	network.on('selectNode', function (params) {
		net.nodeSelection = params.nodes
		net.edgeSelection = params.edges
	})

	network.on('deselectNode', function (params) {
		console.log(params.nodes)
		net.nodeSelection = []
	})

	return { magnetMode }
}

export { initNetwork }
