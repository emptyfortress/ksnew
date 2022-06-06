import { Network } from 'vis-network/standalone'
import { drawCycle } from '@/utils/ctx'
import { useGraph } from '@/stores/graph'

const initNetwork = (network: Network, magnetMode: boolean, showRadial: boolean) => {
	const net = useGraph()

	network.once('beforeDrawing', function () {
		network.focus(5, {
			scale: 0.1,
		})
		network.setOptions({
			layout: { hierarchical: { enabled: true } },
		})
	})

	network.once('afterDrawing', function () {
		network.fit({
			animation: true,
		})
		network.setOptions({
			layout: { hierarchical: { enabled: false } },
		})
		magnetMode = false
	})

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
		showRadial = false
		net.nodeSelection = params.nodes
		net.edgeSelection = params.edges
		let temp = network.getSelection()
		console.log(temp)
	})
	network.on('deselectNode', function (params) {
		net.nodeSelection = params.nodes
	})

	return { magnetMode }
}

export { initNetwork }
