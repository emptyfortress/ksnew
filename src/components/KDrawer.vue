<template lang="pug">
q-drawer(v-model="props.show"
	overlay
	side="right"
	elevated
	:width="expand"
	behavior="mobile"
	)
	q-btn(round flat icon="mdi-close" @click="info.toggleks").close
	Ks

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useInfo } from '@/stores/info'
import Ks from '@/pages/Ks.vue'

const info = useInfo()

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
})

const expand = computed(() => {
	return window.innerWidth
})
</script>

<style scoped lang="scss">
// @import '@/assets/styles/theme.scss';
.q-drawer {
	position: relative;
}
.close {
	position: absolute;
	top: 1rem;
	right: 1rem;
}
</style>
