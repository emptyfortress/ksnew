<template lang="pug">
.center
	q-btn(color="primary" label="На согласование" @click="info.toggle")
</template>

<script setup lang="ts">
import { useInfo } from '@/stores/info'

const info = useInfo()
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.center {
	height: calc(100vh - 220px);
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
