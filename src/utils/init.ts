import { watch } from 'vue'
import { Network } from 'vis-network/standalone'
import { drawDisable, drawOr, drawAnd, drawComplex } from '@/utils/ctx'
import { useInfo } from '@/stores/info'
import { nodes } from '@/stores/json1'

enum StartCondition {
	'None' = 0,
	'And',
	'Or',
	'Complex',
}

const initNetwork = (network: Network) => {
	const info = useInfo()

	network.on('selectNode', function (params) {
		info.nodeSelection = params.nodes[0]
		info.edgeSelection = params.edges
	})

	network.on('deselectNode', function () {
		info.nodeSelection = 1000
	})

	network.on('afterDrawing', function (ctx) {
		let and = nodes
			.filter((e) => e.StartCondition === 1)
			.map((item) => {
				return item.id
			})
		and.forEach((e) => {
			let bb = network.getBoundingBox(e)
			const color = 'blue'
			drawAnd(ctx, bb, color)
		})

		let or = nodes
			.filter((e) => e.StartCondition === 2)
			.map((item) => {
				return item.id
			})
		or.forEach((e) => {
			let bb = network.getBoundingBox(e)
			const color = 'blue'
			drawOr(ctx, bb, color)
		})

		let complex = nodes
			.filter((e) => e.StartCondition === 3)
			.map((item) => {
				return item.id
			})
		complex.forEach((e) => {
			let bb = network.getBoundingBox(e)
			const color = 'blue'
			drawComplex(ctx, bb, color)
		})

		let exclude = nodes
			.filter((e) => e.include === false && e.first !== true && e.last !== true)
			.map((item) => {
				return item.id
			})

		exclude.forEach((e) => {
			let bb = network.getBoundingBox(e)
			drawDisable(ctx, bb)
		})
	})
	watch(info.nodes, (value, oldvalue) => {
		if (value) {
			network.redraw()
		}
	})

	return network
}

export { initNetwork }
