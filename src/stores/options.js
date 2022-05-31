const DIR = 'img/'
const color = '#0096dc'
const green = '#95E3A4'
const darkgreen = '#0A711E'

const options = {
	interaction: { hover: true, tooltipDelay: 0 },
	physics: { enabled: false },
	layout: {
		improvedLayout: true,
		hierarchical: {
			enabled: true,
			levelSeparation: 90,
			nodeSpacing: 170,
			treeSpacing: 200,
			blockShifting: true,
			edgeMinimization: true,
			parentCentralization: true,
			direction: 'UD', // UD, DU, LR, RL
			sortMethod: 'directed', // hubsize, directed
			shakeTowards: 'leaves',
		},
	},
	edges: {
		smooth: { type: 'continuous', forceDirection: 'none' },
		arrows: {
			to: { enabled: true, scaleFactor: 1, type: 'arrow' },
		},
		color: color,
		shadow: {
			enabled: false,
			color: 'rgba(0,0,0,0)',
			size: 5,
			x: 2,
			y: 2,
		},
		chosen: {
			edge: function (values) {
				values.shadowSize = 6
				values.width = 3
				values.shadowColor = 'rgba(0,0,0,.3)'
			},
		},
	},
	nodes: {
		shadow: {
			enabled: false,
		},
		chosen: {
			node: function (values) {
				;(values.shadowSize = 8), (values.borderWidth = 2)
			},
		},
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
			image: DIR + 'bt-start.svg',
			size: 15,
		},
		stop: {
			shape: 'image',
			image: DIR + 'bt-stop.svg',
			size: 15,
		},
		ext: {
			shape: 'image',
			image: DIR + 'bt-condition.svg',
			size: 25,
		},
		finished: {
			shape: 'box',
			color: {
				border: darkgreen,
				background: green,
			},
		},
	},
}

export { options }
