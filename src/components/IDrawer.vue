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
		component(:is="Selector" val="Маршрут 1" :options="options" @select="choose").q-mt-md
	br
	q-list
		q-expansion-item(expand-separator v-for="item  in items" :key="item.id" switch-toggle-side)
			template(v-slot:header)
				.mygrid
					div {{item.label}}
					q-toggle(v-model="selection" :val="item.id")
			q-card-section
				q-list
					q-item(v-for="n in 4")
						q-item-section.text-caption {{n}} Иванов

	q-card-actions.q-mt-lg
		q-btn(unelevated label="Просмотр" @click="toggleks")
		q-btn(unelevated label="Отмена" @click="closeAll")
		q-space
		q-btn(unelevated color="primary" label="Старт согласования" )
	p {{ selection }}
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useInfo } from '@/stores/info'
import Selector from '@/components/common/Selector.vue'

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
})

const info = useInfo()

const options = ['Маршрут 1', 'Маршрут 2', 'Маршрут 3']

const items = computed(() => {
	const filt = (e: any) => e.first !== true && e.last !== true
	return info.nodes.filter(filt)
	// return nodes.filter(filt)
})

let start = items.value
	.filter((e) => e.active === true)
	.map((item) => {
		return item.id
	})

const selection = ref(start)

const choose = (e: string) => {
	console.log(e)
}

// watchEffect(() => {
// 	info.nodes.forEach((item) => {
// 		if (selection.value.includes(item.id)) {
// 			item.active = true
// 		} else item.active = false
// 	})
// })

const toggleks = () => {
	info.toggleks()
}
const closeAll = () => {
	info.closeAll()
}
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
