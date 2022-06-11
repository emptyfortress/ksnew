<template lang="pug">
q-card
	q-list
		template(v-if="info.nodeSelection === 1000")
			q-item(clickable @click="toggle")
				q-item-section Переключить детализацию
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

const emit = defineEmits(['toggle', 'close'])

const info = useInfo()

const currentNode = computed(() => {
	return info.nodes[info.nodeSelection].active
})
const toggleNode = () => {
	info.toggleNode()
	emit('close')
}

const toggle = () => {
	emit('toggle')
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
