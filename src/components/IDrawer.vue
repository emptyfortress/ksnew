<template lang="pug">
q-drawer(v-model="props.show"
	overlay
	side="right"
	:width="420"
	elevated
	behavior="mobile"
	bordered)
	q-card-section
		.row.justify-between.items-center
			.text-h6 Маршрут согласования
			q-btn(round flat  @click="info.closeInfo")
				q-icon(name="mdi-close" v-if="!info.ksDrawer")
				q-icon(name="mdi-arrow-right" v-else)
		component(:is="Selector" :val="selectorValue" :options="options" @select="choose").q-mt-md
	br
	q-list
		q-expansion-item(expand-separator v-for="item  in items" :key="item.id" switch-toggle-side)
			template(v-slot:header)
				.mygrid
					div {{item.label}}
					q-toggle(:model-value="info.activeEtaps" :val="item.id" @update:model-value="toggle(item.id)")
			q-card-section
				q-list
					q-item(v-for="n in 4")
						q-item-section.text-caption {{n}} Иванов

	q-card-actions.q-mt-lg
		q-btn(unelevated label="Просмотр" @click="toggleks")
		q-btn(unelevated label="Отмена" @click="closeAll")
		q-space
		q-btn(unelevated color="primary" label="Старт согласования" )
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUpdated, watchEffect } from 'vue'
import type { Ref } from 'vue'

import { useInfo } from '@/stores/info'
import Selector from '@/components/common/Selector.vue'

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
})

const selection: Ref<Number[]> = ref([])
const info = useInfo()

const options = ['Маршрут 1', 'Маршрут 2', 'Маршрут 3']

const items = computed(() => {
	const filt = (e: any) => e.first !== true && e.last !== true
	return info.nodes.filter(filt)
})

const toggle = (e: number) => {
	let found = info.nodes.find((item) => item.id === e)!
	found.active = !found.active
}

const selectorValue = ref()

watchEffect(() => (selectorValue.value = `Маршрут ${info.marsh}`))

const choose = (s: string, n: number) => {
	info.setMarsh(n + 1)
	selectorValue.value = s
	switch (n + 1) {
		case 1:
			info.setNodes1()
			reset()
			return
		case 2:
			info.setNodes2()
			reset()
			return
		case 3:
			info.setNodes3()
			reset()
			return
		default:
			info.setNodes1()
			reset()
			return
	}
}

const toggleks = () => {
	info.toggleks()
}
const closeAll = () => {
	info.closeAll()
}
const reset = () => {
	selection.value = info.nodes
		.filter((e) => e.first !== true && e.last !== true)
		.filter((e) => e.active === true)
		.map((item) => {
			return item.id
		})
}
onMounted(() => reset())
onUpdated(() => reset())
</script>

<style scoped lang="scss">
// @import '@/assets/styles/theme.scss';
.q-list {
	font-size: 1.1rem;
}
.close {
	position: fixed;
	top: 1rem;
	right: 1rem;
	z-index: 1000;
}
.mygrid {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 1rem;
	div {
		align-self: center;
	}
}
</style>
