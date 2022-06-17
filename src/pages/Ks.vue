<template lang="pug">
.ks(:class="{ 'full' : fullScreenMode }")
	q-splitter(v-model="splitterModel" unit="px" :limits="[0, Infinity]" :class="{'edit' : editMode, 'full' : fullScreenMode}" reverse).separator
		template(v-slot:before)
			.editor
				#mynetwork(:class="{ 'edit' : editMode }")
				#radial(v-show="showRadial" v-click-away="closeRadial")
					SvgRadial
				#rectmenu(v-show="showRect" v-click-away="closeMenu")
					ContextMenu(@toggle="load" @redraw="redraw")
				.icons.legend
					q-btn(round unelevated @click="showInfo = !showInfo")
						q-icon(name="mdi-close" v-if="showInfo")
						q-icon(name="mdi-help-circle-outline" v-else)
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
					q-btn(round unelevated)
						SvgIcon(name="sliders-vertical")
				transition(name="slide-left")
					.toolbar(v-show="editMode")
				transition(name="slide-left")
					Legend(v-show="showInfo").legend

		template(v-slot:after)
			.props
				Panel(@redraw="redraw")

	.send
		q-btn(flat color="primary" unelevated  @click="info.closeAll") Отмена
		q-btn(color="primary" unelevated @click="info.closeAll") Старт согласования
	.save(v-if="editMode")
		q-btn(color="primary" unelevated disabled) Сохранить маршрут
		q-btn(color="primary" unelevated disabled) Сохранить этап

	q-btn(round color="primary" icon="mdi-arrow-left" @click="info.toggle").back

</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, watch } from 'vue'
import { Network, DataSet } from 'vis-network/standalone' //this import supports types

import SvgIcon from '@/components/SvgIcon.vue'
import SvgRadial from '@/components/SvgRadial.vue'
import Panel from '@/components/Panel.vue'
import ContextMenu from '@/components/ContextMenu.vue'
import Legend from '@/components/Legend.vue'

import { useInfo } from '@/stores/info'
import { options } from '@/stores/options'
import { initNetwork } from '@/utils/init'
import { nodes1, edges1 } from '@/stores/json1'
import { nodes2, edges2 } from '@/stores/json2'
import { nodes3, edges3 } from '@/stores/json3'

const editMode = ref(false)
const magnetMode = ref(true)
const fullScreenMode = ref(false)
const showRadial = ref(false)
const showRect = ref(false)
const showInfo = ref(false)

const info = useInfo()

let network: Network

const nod1 = new DataSet(nodes1)
const edg1 = new DataSet(edges1)

const nod2 = new DataSet(nodes2)
const edg2 = new DataSet(edges2)

const nod3 = new DataSet(nodes3)
const edg3 = new DataSet(edges3)

let data = {
	nodes: nod1,
	edges: edg1,
}

onMounted(() => {
	const container = document.getElementById('mynetwork')!
	const radial = document.getElementById('radial')!
	const rect = document.getElementById('rectmenu')!
	network = new Network(container, data, options)

	initNetwork(network, data.nodes, editMode, showRadial, radial, showRect, rect)

	watchEffect(() => {
		if (info.activeEtaps.length) {
			network.redraw()
		}
	})
	watchEffect(() => load(info.marsh))
})

const closeMenu = () => {
	if (showRect.value === true) {
		showRect.value = false
		info.nodeSelection = 1000
	}
}

const refresh = () => {
	network.destroy()
	const container = document.getElementById('mynetwork')!
	const radial = document.getElementById('radial')!
	const rect = document.getElementById('rectmenu')!
	network = new Network(container, data, options)

	initNetwork(network, data.nodes, editMode, showRadial, radial, showRect, rect)
}

const toggleMagnet = () => {
	if (magnetMode.value == true) {
		network.setOptions({
			physics: { enabled: false },
			layout: { hierarchical: { enabled: false } },
		})
		return (magnetMode.value = false)
	} else {
		network.setOptions({
			physics: { enabled: true },
			layout: { hierarchical: { enabled: false } },
		})
		return (magnetMode.value = true)
	}
}

const redraw = () => {
	network.redraw()
}

const splitterModel = ref(430)

const closeRadial = () => {
	if (showRadial.value === true) {
		showRadial.value = false
	}
}

const load = (e: number) => {
	const container = document.getElementById('mynetwork')!
	const radial = document.getElementById('radial')!
	const rect = document.getElementById('rectmenu')!
	if (e === 1) {
		network.destroy()
		const data1 = {
			nodes: nod1,
			edges: edg1,
		}
		Object.assign(data, data1)
		network = new Network(container, data, options)
		initNetwork(network, data.nodes, editMode, showRadial, radial, showRect, rect)
		info.setNodes1()
		showRect.value = false
	}
	if (e === 2) {
		network.destroy()
		const data2 = {
			nodes: nod2,
			edges: edg2,
		}
		Object.assign(data, data2)
		network = new Network(container, data, options)
		initNetwork(network, data.nodes, editMode, showRadial, radial, showRect, rect)
		info.setNodes2()
		showRect.value = false
	}
	if (e === 3) {
		network.destroy()
		const data3 = {
			nodes: nod3,
			edges: edg3,
		}
		Object.assign(data, data3)
		network = new Network(container, data, options)
		initNetwork(network, data.nodes, editMode, showRadial, radial, showRect, rect)
		info.setNodes3()
		showRect.value = false
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.ks {
	background: var(--bg-light);
	position: relative;
}
.editor {
	width: 100%;
	height: 100%;
	position: relative;
	padding-right: 0.25rem;
	#mynetwork {
		position: relative;
		overflow: visible;
		border: 1px solid var(--my-border-color);
		width: 100%;
		height: 100%;
		align-items: center;
		color: #aaa;
		background: #feffff;
		background: linear-gradient(-45deg, #f7fcff, #aad7fd, #f7fcff);
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
	position: relative;
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
	&.legend {
		top: 0;
		left: 0;
	}
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
	// background: var(--bg-light);
	height: calc(100vh - 60px);
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
.legend {
	position: absolute;
	top: 36px;
	left: 4px;
}
.save {
	display: flex;
	justify-content: space-between;
	padding: 0 1rem;
	.q-btn {
		margin-right: 4px;
	}
}
.send {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 1rem;
}
#rectmenu {
	position: absolute;
	top: 0;
	left: 0;
}
.back {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	z-index: 10;
}
</style>
