<template lang="pug">
q-card
	q-list
		template(v-if="net.nodeSelection === 1000")
			q-item(clickable @click="toggle")
				q-item-section Переключить детализацию
		template(v-else)
			q-item(clickable)
				q-item-section {{net.nodeSelection}}
			q-item(clickable )
				q-item-section Показать доработки
			q-item(clickable )
				q-item-section Отрицательный исход
</template>

<script setup lang="ts">
import { useGraph } from '@/stores/graph'

const emit = defineEmits(['toggle'])

const net = useGraph()
// const nodes = net.nodes

const toggle = () => {
	emit('toggle')
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
