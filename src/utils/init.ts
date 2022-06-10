import { Network } from 'vis-network/standalone'
import { drawDisable, drawOr, drawAnd, drawComplex } from '@/utils/ctx'
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
		let and = [3, 5, 6]
		and.forEach((e) => {
			var nodeId = e
			let bb = network.getBoundingBox(nodeId)
			const color = 'blue'
			// drawCycle(ctx, bb, color)
			drawAnd(ctx, bb, color)
		})
		let bb = network.getBoundingBox(1)
		drawDisable(ctx, bb)
		bb = network.getBoundingBox(2)
		drawComplex(ctx, bb)
	})

	return network
}

export { initNetwork }
