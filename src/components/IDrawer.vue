<template lang="pug">
q-drawer(v-model="info.infoDrawer"
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
		component(:is="Selector" val="Длинный маршрут для договоров" :options="options").q-mt-md
	br
	q-list
		q-expansion-item(expand-separator v-for="(item, index) in items" :key="item.id" switch-toggle-side)
			template(v-slot:header)
				.row.full-width.justify-between.items-center
					div {{index + 1}}.&nbsp;&nbsp;{{item.label}}
					div
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
// import { useGraph } from '@/stores/graph'
import Selector from '@/components/common/Selector.vue'
// import { nodes } from '@/stores/json1'

const info = useInfo()
// const graph = useGraph()

const options = ['Длинный маршрут для договоров', 'Маршрут 1', 'Маршрут 2']

const items = computed(() => {
	const filt = (e: any) => e.first !== true && e.last !== true
	return info.nodes.filter(filt)
	// return nodes.filter(filt)
})

let start = items.value
	.filter((e) => e.include === true)
	.map((item) => {
		return item.id
	})

const selection = ref(start)

watchEffect(() => {
	info.nodes.forEach((item) => {
		if (selection.value.includes(item.id)) {
			item.include = true
		} else item.include = false
	})
})

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
</style>
