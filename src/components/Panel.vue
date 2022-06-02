<template lang="pug">
.proper
	template(v-if="net.selected")
		q-tabs(v-model="tab" inline-label indicator-color="primary" align="left").tab
			q-tab(name="props" label="Свойства")
			q-tab(name="logs" label="Журнал")
			q-tab(name="links" label="Переходы")
		q-tab-panels(v-model="tab" animated)
			q-tab-panel(name="props")
					component(:is="Props")
			q-tab-panel(name="logs")
				h2 logs
			q-tab-panel(name="links")
				h2 links
	template(v-else)
		.empty Выберите узел или переход,<br>чтобы редактировать его свойства.
		.info

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGraph } from '@/stores/graph'
import Props from '@/components/Props.vue'

const net = useGraph()

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
.empty {
	font-style: italic;
	color: grey;
	text-align: center;
	margin-top: 1rem;
	border-bottom: 1px solid var(--my-border-color);
	padding-bottom: 1rem;
}
</style>
