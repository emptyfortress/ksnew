import { Network, DataSet } from 'vis-network/standalone'
import { drawCycle } from '@/utils/ctx'
import { useGraph } from '@/stores/graph'
import { options } from '@/stores/options'

const initNetwork = (network: Network, magnetMode: boolean, showRadial: boolean) => {
	const net = useGraph()

	network.once('beforeDrawing', function () {
		network.focus(5, {
			scale: 5,
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

	network.on('hoverNode', function (params) {
		console.log(params.node)
	})

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
	// network.on('oncontext', (params) => {
	// 	params.event.preventDefault()
	// 	let coordClick = params.pointer.DOM
	// 	showRadial = true
	// 	let radial = document.getElementById('radial')!
	// 	radial.style.left = coordClick.x - 60 + 'px'
	// 	radial.style.top = coordClick.y - 60 + 'px'
	// })

	return { magnetMode, showRadial }
}

export { initNetwork }
