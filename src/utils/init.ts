import { Network } from 'vis-network/standalone'
// import { drawCycle } from '@/utils/ctx'
import { useGraph } from '@/stores/graph'

const initNetwork = (network: Network) => {
	const net = useGraph()

	network.on('selectNode', function (params) {
		net.nodeSelection = params.nodes[0]
		net.edgeSelection = params.edges
	})

	network.on('deselectNode', function () {
		net.nodeSelection = 1000
	})

	return network
}

export { initNetwork }
