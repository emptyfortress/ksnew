import { Network } from 'vis-network/standalone'
import { drawCycle, drawRec } from '@/utils/ctx'
import { useGraph } from '@/stores/graph'

const initNetwork = (network: Network) => {
	const net = useGraph()

	network.on('selectNode', function (params) {
		net.nodeSelection = params.nodes[0]
		net.edgeSelection = params.edges
		console.log(params)
		const temp = network.getSelectedNodes()
		const bb = network.getBoundingBox(temp[0])
		console.log(bb)
	})

	network.on('deselectNode', function () {
		net.nodeSelection = 1000
	})

	network.on('afterDrawing', function (ctx) {
		var nodeId = 5
		const bb = network.getBoundingBox(nodeId)
		const color = 'blue'
		// drawCycle(ctx, bb, color)
		drawRec(ctx, bb)
		// console.log(bb)
	})

	return network
}

export { initNetwork }
