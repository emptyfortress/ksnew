<template lang="pug">
.proper
	template(v-if="info.selected")
		q-tabs(v-model="tab" inline-label indicator-color="primary" align="left").tab
			q-tab(name="props" label="Этап")
			q-tab(name="logs" label="Журнал")
			q-tab(name="links" label="Переходы")
		q-tab-panels(v-model="tab" animated)
			q-tab-panel(name="props")
				component(:is="Props" @redraw="redraw")
			q-tab-panel(name="logs")
				component(:is="SoglTable")
			q-tab-panel(name="links")
				h2 links
	template(v-else)
		q-card(flat)
			q-card-section
				.text-h6
					q-icon(name="mdi-map-marker-path" size="md").q-mr-md
					span Информация по маршруту
			q-card-section
				q-markup-table(flat dense)
					tbody
						tr
							td Название
							td.text-bold {{ tit }}
						tr(v-for="row in table")
							td {{ row.label }}
							td {{ row.value }}
			q-card-section
				p {{ info.nodes[0].desc}}
		.empty Выберите узел или переход,<br>чтобы просмотреть его свойства.

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useInfo } from '@/stores/info'
import Props from '@/components/Props.vue'
import SoglTable from '@/components/common/SoglTable.vue'

const emit = defineEmits(['redraw'])

const info = useInfo()

const tab = ref('props')

const table = [
	// { label: 'Название', value: 'Согласование договоров общее (делопроизводство)', bold: true },
	{ label: 'Создано', value: '2021-10-15' },
	{ label: 'Автор', value: 'Орлов П.С.' },
	{ label: 'Утверждено', value: 'Птичкина А.П.' },
]

const tit = computed(() => {
	return info.nodes[0].title
})
const redraw = () => {
	emit('redraw')
}
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
	border-top: 1px solid var(--my-border-color);
	padding-bottom: 1rem;
	padding-top: 1rem;
}
</style>
