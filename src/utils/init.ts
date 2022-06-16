import { watch } from 'vue'
import { Network, DataSet } from 'vis-network/standalone'
import { drawDisable, drawOr, drawAnd, drawComplex } from '@/utils/ctx'
import { useInfo } from '@/stores/info'
import type { Ref } from 'vue'

// import { nodes } from '@/stores/json1'

// enum StartCondition {
// 	'None' = 0,
// 	'And',
// 	'Or',
// 	'Complex',
// }

const initNetwork = (
	network: Network,
	nodes: DataSet<MyNode>,
	editMode: Ref<boolean>,
	showRadial: Ref<boolean>,
	radial: HTMLElement,
	showRect: Ref<boolean>,
	rect: HTMLElement
) => {
	const info = useInfo()

	network.on('selectNode', function (params) {
		info.nodeSelection = params.nodes[0]
		info.edgeSelection = params.edges
	})

	network.on('deselectNode', function () {
		info.nodeSelection = 1000
	})

	network.on('oncontext', (params) => {
		console.log(editMode.value)
		params.event.preventDefault()
		let coordClick = params.pointer.DOM
		if (editMode.value === true) {
			showRadial.value = true
			radial.style.left = coordClick.x - 60 + 'px'
			radial.style.top = coordClick.y - 60 + 'px'
		} else {
			let currentNode = network.getNodeAt({ x: coordClick.x, y: coordClick.y })
			if (currentNode !== undefined) {
				info.setCurrentNode(currentNode)
			}
			rect.style.left = coordClick.x + 5 + 'px'
			rect.style.top = coordClick.y + 5 + 'px'
			showRect.value = true
		}
	})

	network.on('afterDrawing', function (ctx) {
		nodes.forEach((node) => {
			const color = 'blue'
			let bb = network.getBoundingBox(node.id)
			if (node.StartCondition === 1) {
				drawAnd(ctx, bb, color)
			}
			if (node.StartCondition === 2) {
				drawOr(ctx, bb, color)
			}
			if (node.StartCondition === 3) {
				drawComplex(ctx, bb, color)
			}
		})
		nodes.forEach((node) => {
			let bb = network.getBoundingBox(node.id)
			if (node.active !== true && node.first !== true && node.last !== true) {
				drawDisable(ctx, bb)
			}
		})
	})
	// watch(info.nodes, (value) => {
	// 	if (value) {
	// 		network.redraw()
	// 	}
	// })

	return { network, nodes }
}

export { initNetwork }
