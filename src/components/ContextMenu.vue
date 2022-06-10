<template lang="pug">
q-card
	q-list
		template(v-if="info.nodeSelection === 1000")
			q-item(clickable @click="toggle")
				q-item-section Переключить детализацию
		template(v-else)
			q-item(clickable)
				q-item-section {{info.nodeSelection}}
			q-item(clickable )
				q-item-section Показать доработки
			q-item(clickable )
				q-item-section Отрицательный исход
</template>

<script setup lang="ts">
import { useInfo } from '@/stores/info'

const emit = defineEmits(['toggle'])

const info = useInfo()
// const nodes = net.nodes

const toggle = () => {
	emit('toggle')
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
