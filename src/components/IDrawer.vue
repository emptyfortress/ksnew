<template lang="pug">
q-drawer(v-model="props.show"
	overlay
	side="right"
	:width="400"
	behavior="mobile"
	bordered)
	q-card-section
		.row.justify-between.items-center
			.text-h6 Маршрут согласования
			q-btn(round flat icon="mdi-close" @click="info.toggle")
		component(:is="Selector" val="Длинный маршрут для договоров" :options="options").q-mt-md
		br
		q-list
			q-item(v-for="(item, index) in items" :key="item.id")
				q-item-section {{index + 1}}.&nbsp;&nbsp; {{item.label}}
				q-item-section(side)
					q-toggle(v-model="selection" :val="item.id")

		p {{selection}}
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useInfo } from '@/stores/info'
import Selector from '@/components/common/Selector.vue'
import { nodes } from '@/stores/json1'

const info = useInfo()

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
})

const options = ['Длинный маршрут для договоров', 'Маршрут 1', 'Маршрут 2']

const items = computed(() => {
	const filt = (e: any) => e.first === false && e.last === false && e.repeat !== true
	return nodes.filter(filt)
})

let start = items.value.map((item) => {
	return item.id
})
const selection = ref(start)
</script>

<style scoped lang="scss">
// @import '@/assets/styles/theme.scss';
.q-list {
	font-size: 1.1rem;
}
</style>
