<template lang="pug">
q-drawer(v-model="props.show"
	overlay
	side="right"
	:width="500"
	behavior="mobile"
	bordered)
	h2 fuck

</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
})

const width = ref(256)
</script>

<style scoped lang="scss">
// @import '@/assets/styles/theme.scss';
</style>
