<template lang="pug">
.ks(:class="{ 'full' : fullScreenMode }")
	q-splitter(v-model="splitterModel" :limits="[0, 100]" :class="{'edit' : editMode, 'full' : fullScreenMode}").separator
		template(v-slot:before)
			.editor
				#mynetwork(:class="{ 'edit' : editMode }")
				#radial(v-show="showRadial" v-click-away="closeRadial")
					SvgRadial
				#rectmenu(v-show="showRect" v-click-away="closeMenu")
					ContextMenu
				.icons.top
					q-btn(round unelevated @click="editMode = !editMode")
						q-icon(name="mdi-pencil")
					q-btn(round unelevated @click="fullScreenMode = !fullScreenMode")
						q-icon(name="mdi-fullscreen-exit" v-if="fullScreenMode")
						q-icon(name="mdi-fullscreen" v-else )
				.icons.bottom
					q-btn(round unelevated @click="toggleMagnet")
						img(src="@/assets/img/magnet-active.svg" v-if="magnetMode")
						img(src="@/assets/img/magnet.svg" v-else)
					q-btn(round unelevated @click="refresh")
						SvgIcon(name="refresh")
				.icons.cog
					q-btn(round unelevated )
						SvgIcon(name="sliders-vertical")
				transition(name="slide-left")
					.toolbar(v-show="editMode")

		template(v-slot:after)
			.props
				Panel

	.save(v-if="editMode")
		q-btn(color="primary" unelevated disabled) Сохранить маршрут
		q-btn(color="primary" unelevated disabled) Сохранить этап
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Network } from 'vis-network/standalone' //this import supports types
import SvgIcon from '@/components/SvgIcon.vue'
import SvgRadial from '@/components/SvgRadial.vue'
import Panel from '@/components/Panel.vue'
import ContextMenu from '@/components/ContextMenu.vue'

import { useGraph } from '@/stores/graph'
import { nanoid } from 'nanoid'
import { options } from '@/stores/options'
import { drawCycle } from '@/utils/ctx'
import { initNetwork } from '@/utils/init'

const editMode = ref(false)
const magnetMode = ref(false)
const fullScreenMode = ref(false)
const showRadial = ref(false)
const showRect = ref(false)

const net = useGraph()

let network: Network

const data = {
	nodes: net.nodes,
	edges: net.edges,
}

onMounted(() => {
	const container = document.getElementById('mynetwork')!
	network = new Network(container, data, options)

	initNetwork(network, magnetMode.value)

	network.on('oncontext', (params) => {
		params.event.preventDefault()
		let coordClick = params.pointer.DOM
		if (editMode.value === true) {
			showRadial.value = true
			let radial = document.getElementById('radial')!
			radial.style.left = coordClick.x - 60 + 'px'
			radial.style.top = coordClick.y - 60 + 'px'
		} else {
			let currentNode = network.getNodeAt({ x: coordClick.x, y: coordClick.y })
			if (currentNode !== undefined) {
				// 	const selection = []
				net.setCurrentNode(currentNode)
				// 	selection.push(currentNode)
				let rect = document.getElementById('rectmenu')!
				rect.style.left = coordClick.x + 5 + 'px'
				rect.style.top = coordClick.y + 5 + 'px'
				showRect.value = true
			}
		}
	})
})

const closeMenu = () => {
	if (showRect.value === true) {
		showRect.value = false
		net.nodeSelection = []
	}
}

const refresh = () => {
	network.destroy()
	const container = document.getElementById('mynetwork')!
	network = new Network(container, data, options)

	network.on('beforeDrawing', function (ctx) {
		var nodeId = 4
		const bb = network.getBoundingBox(nodeId)
		const color = 'blue'
		drawCycle(ctx, bb, color)
	})

	network.once('afterDrawing', function () {
		network.setOptions({
			layout: { hierarchical: { enabled: false } },
		})
		magnetMode.value = false
	})
}

const toggleMagnet = () => {
	if (magnetMode.value == true) {
		network.setOptions({
			physics: false,
			layout: { hierarchical: { enabled: false } },
		})
		magnetMode.value = false
	} else {
		network.setOptions({
			physics: true,
			layout: { hierarchical: { enabled: false } },
		})
		magnetMode.value = true
	}
}

const splitterModel = ref(50)

const closeRadial = () => {
	if (showRadial.value === true) {
		showRadial.value = false
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.ks {
	background: var(--bg-light);
}
.editor {
	width: 100%;
	height: 100%;
	position: relative;
	padding-right: 0.25rem;
	z-index: 1000;
	#mynetwork {
		position: relative;
		overflow: visible;
		border: 1px solid var(--my-border-color);
		width: 100%;
		height: 100%;
		align-items: center;
		color: #aaa;
		background: #feffff;
		background: linear-gradient(to bottom, #feffff 0%, #b6dcfb 50%, #feffff 100%);
		&.edit {
			border-color: var(--q-primary);
			background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAKZJREFUKFNNUNsNhDAMs0UZ4GCG4/ZfATaBLQDJJyfhwUdJU8ePcF4PAQJJ+FMddY2Ge1zWXdPQIJ4AGgwXCEIJiCqAh6axQThBtGB9aHhLJOPYx3yIKy1kWb034+MvXFozBy0tgPO26/exNOAA0fSjgVIJ8PLYXVopV6QZJhm4bLu+Q5+PPgIUdFWXkznCOG2tRP6/hio4vfBptPQJyvu8Rnzvbu9/N7pfWZyGdmEAAAAASUVORK5CYII=)
				repeat;
		}
	}
}
.props {
	padding-left: 0.25rem;
	height: 100%;
	z-index: -20;
}
#radial {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
}
.icons {
	position: absolute;
	padding-right: 0;
	padding-left: 0;
	padding-top: 0;
	padding-bottom: 0;
	&.top {
		top: 0;
		right: 0.5rem;
	}
	&.cog {
		bottom: 0;
		left: 0;
	}
	&.bottom {
		bottom: 0;
		right: 0.5rem;
		display: flex;
		img {
			opacity: 0.5;
			width: 24px;
			cursor: pointer;
			&:hover {
				opacity: 1;
			}
		}
	}
	.q-btn .q-icon,
	.q-btn svg {
		fill: #666;
		color: #666;
	}
	.q-btn:hover .q-icon,
	.q-btn:hover svg {
		color: #000;
		fill: #000;
	}
}
.toolbar {
	width: 50px;
	height: 300px;
	background: white;
	border: 1px solid var(--my-border-color);
	position: absolute;
	top: 5px;
	left: 5px;
	box-shadow: 0px 0px 3px rgba(black, 0.4);
}
.separator {
	box-sizing: border-box;
	padding: 1rem;
	background: var(--bg-light);
	height: calc(100vh - 110px);
	&.edit {
		height: calc(100vh - 160px);
	}
	&.full {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 3000;
		padding: 0;
	}
}
.save {
	display: flex;
	justify-content: space-between;
	padding: 0 1rem;
	.q-btn {
		margin-right: 4px;
	}
}
#rectmenu {
	position: absolute;
	top: 0;
	left: 0;
}
</style>
