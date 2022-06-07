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
		// console.log(typeof params.nodes[0])
		// console.log(network.getSelection())
		net.nodeSelection = params.nodes[0]
		net.edgeSelection = params.edges
	})

	network.on('deselectNode', function (params) {
		// console.log(params.nodes)
		net.nodeSelection = 1000
		console.log(net.nodeSelection)
	})

	return { magnetMode }
}

export { initNetwork }
