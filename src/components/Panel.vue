<template lang="pug">
.proper
	q-tabs(v-model="tab" inline-label indicator-color="primary" align="left").tab
		q-tab(name="props" label="Свойства")
		q-tab(name="logs" label="Журнал")
		q-tab(name="links" label="Переходы")
	q-tab-panels(v-model="tab" animated)
		q-tab-panel(name="props")
			Props
		q-tab-panel(name="logs")
			h2 logs
		q-tab-panel(name="links")
			h2 links
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Props from '@/components/Props.vue'

const tab = ref('props')
</script>

<style scoped lang="scss">
// @import '@/assets/styles/theme.scss';

.proper {
	background: var(--bg-drawer);
	background: white;
	width: 100%;
	height: 100%;
	border: 1px solid var(--my-border-color);
	box-sizing: border-box;
}
.tab {
	border-bottom: 1px solid #ccc;
}
.q-tab-panel {
	padding: 1rem;
}
</style>
