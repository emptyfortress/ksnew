<template lang="pug">
q-card
	q-list
		q-item(clickable)
			q-item-section {{net.nodeSelection}}
		q-item(clickable)
			q-item-section Показать доработки
		q-item(clickable)
			q-item-section Отрицательный исход
</template>

<script setup lang="ts">
import { useGraph } from '@/stores/graph'

const net = useGraph()
// const nodes = net.nodes

// const current = computed(() => {
// 	return nodes[net.nodeSelection].label
// })
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
