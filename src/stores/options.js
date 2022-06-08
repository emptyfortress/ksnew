const DIR = 'img/'
// const color = '#0096dc'
const color = 'blue'
const green = '#95E3A4'
const darkgreen = '#0A711E'

const options = {
	interaction: { hover: true, tooltipDelay: 0 },
	physics: { enabled: true },
	layout: {
		improvedLayout: false,
		hierarchical: {
			enabled: true,
			levelSeparation: 80,
			nodeSpacing: 120,
			treeSpacing: 100,
			blockShifting: true,
			edgeMinimization: true,
			parentCentralization: true,
			direction: 'UD', // UD, DU, LR, RL
			sortMethod: 'directed', // hubsize, directed
			shakeTowards: 'leaves',
		},
	},
	edges: {
		smooth: true,
		arrows: {
			to: { enabled: true, scaleFactor: 1, type: 'arrow' },
		},
		color: 'rgba(0, 0, 0, 1)',
		shadow: {
			enabled: false,
			color: 'rgba(0,0,0,0)',
			size: 5,
			x: 2,
			y: 2,
		},
		// chosen: true,
		// chosen: {
		// 	edge: function (values) {
		// 		values.shadowSize = 6
		// 		values.width = 3
		// 		values.shadowColor = 'rgba(0,0,0,.3)'
		// 	},
		// },
	},
	nodes: {
		shadow: {
			enabled: false,
		},
		// chosen: {
		// 	node: function (values) {
		// 		;(values.shadowSize = 8), (values.borderWidth = 2)
		// 	},
		// },
	},
	groups: {
		box: {
			shape: 'box',
			color: {
				border: color,
				background: '#fff',
			},
		},
		start: {
			shape: 'image',
			image: DIR + 'start.svg',
			size: 15,
		},
		stop: {
			shape: 'image',
			image: DIR + 'stop.svg',
			size: 15,
		},
		complex: {
			shape: 'image',
			image: DIR + 'complex.svg',
			size: 15,
		},
		ori: {
			shape: 'image',
			image: DIR + 'ori.svg',
			size: 15,
		},
		ore: {
			shape: 'image',
			image: DIR + 'ore.svg',
			size: 15,
		},
		and: {
			shape: 'image',
			image: DIR + 'and.svg',
			size: 15,
		},
		finished: {
			shape: 'box',
			color: {
				border: darkgreen,
				background: green,
			},
		},
		cluster: {
			shape: 'image',
			image: DIR + 'cluster.svg',
			size: 4,
		},
	},
}

export { options }
