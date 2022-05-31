<template lang="pug">
.proper
	q-tabs(v-model="tab" inline-label indicator-color="primary").tab
		q-tab(name="mails" label="Свойства")
		q-tab(name="alarms" label="Журнал")
		q-tab(name="movies" label="Переходы")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const tab = ref('mails')
</script>

<style scoped lang="scss">
// @import '@/assets/styles/theme.scss';

.proper {
	background: var(--bg-drawer);
	background: white;
	width: 100%;
	height: 100%;
	border: 1px solid var(--my-border-color);
	// margin-left: 0.5rem;
	box-sizing: border-box;
}
.tab {
	border-bottom: 1px solid #ccc;
}
</style>
