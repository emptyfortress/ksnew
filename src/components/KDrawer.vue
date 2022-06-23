<template lang="pug">
q-drawer(v-model="props.show"
	overlay
	side="right"
	elevated
	:width="expand"
	behavior="mobile"
	no-swipe-close
	)
	Ks
	//- component(:is="Ks")

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Ks from '@/pages/Ks.vue'

const props = defineProps({
	show: Boolean,
})

const expand = computed(() => {
	return window.innerWidth
})
</script>

<style scoped lang="scss">
// @import '@/assets/styles/theme.scss';
</style>
