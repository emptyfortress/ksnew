<template lang="pug">
q-card
	q-list
		template(v-if="info.nodeSelection === 1000")
			q-item(clickable @click="toggle(1)")
				q-item-section Маршрут 1
			q-item(clickable @click="toggle(2)")
				q-item-section Маршрут 2
			q-item(clickable @click="toggle(3)")
				q-item-section Маршрут 3
		template(v-else)
			q-item(clickable)
				q-item-section {{info.nodeSelection}}
			template(v-if="info.nodeSelection !== 0 && info.nodeSelection !== 8")
				q-item(clickable  @click="toggleNode")
					q-item-section Активен
					q-item-section(side)
						q-toggle(:model-value="currentNode"  @click="toggleNode")
				q-separator
				q-item(clickable )
					q-item-section Показать доработки
				q-item(clickable )
					q-item-section Отрицательный исход
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useInfo } from '@/stores/info'

const emit = defineEmits(['toggle', 'redraw'])

const info = useInfo()

const currentNode = computed(() => {
	return info.nodes[info.nodeSelection].active
})
const toggleNode = () => {
	info.toggleNode()
	emit('redraw')
}

const toggle = (e: number) => {
	emit('toggle', e)
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
