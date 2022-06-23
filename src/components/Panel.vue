<template lang="pug">
template(v-if="info.selected")
	q-tabs(v-model="tab" inline-label indicator-color="primary" align="left").tab
		q-tab(name="props" label="Свойства этапа")
		q-tab(name="logs" label="Журнал")
		//- q-tab(name="links" label="Переходы")
	q-tab-panels(v-model="tab" animated)
		q-tab-panel(name="props")
			component(:is="Props" @redraw="redraw")
		q-tab-panel(name="logs")
			component(:is="Journal")
		//- q-tab-panel(name="links")
		//- 	h2 links
template(v-else)
	q-card(flat).trans
		q-card-section
			.text-h6
				q-icon(name="mdi-map-marker-path" size="md").q-mr-md
				span Информация по маршруту
		.text-caption.q-mx-md {{ info.nodes[0].desc}}
		q-card-section
			q-markup-table(flat dense)
				tbody
					tr
						td Название
						td.text-bold {{ tit }}
					tr(v-for="row in table" v-once :key="row.label")
						td {{ row.label }}
						td {{ row.value }}
		q-tabs(v-model="tab1" inline-label indicator-color="primary" align="left").tab
			q-tab(name="common" label="Общие")
			q-tab(name="validate" label="Валидация")
		q-tab-panels(v-model="tab1" animated)
			q-tab-panel(name="common")
				q-card-section
					.row.justify-between
						.text-subtitle1.text-center.text-weight-bold Текущее состояние
						.text-subtitle1.text-center.text-weight-bold(v-once) {{formattedString}}
					q-markup-table(flat dense)
						tbody
							tr
								td Документ
								td Рабочий
							tr(v-for="row in table1" v-once :key="row.label")
								td {{ row.label }}
								td {{ row.value }}
				q-card-section
					.row.justify-between
						.text-subtitle1.text-center.text-weight-bold Файлы для согласования
						.text-subtitle1.text-center.text-weight-bold 2
					q-markup-table(flat dense)
						tbody
							tr
								td.link Договор с ООО "Ромашка"
								td.link Текущая версия
							tr
								td.link Приложение к договору
								td.link Текущая версия
			q-tab-panel(name="validate")
				q-card-section
					.row.justify-between
						.text-subtitle1.text-center.text-weight-bold Проблемы с этапами
						.text-subtitle1.text-center.text-weight-bold 3
					q-list(separate)
						q-item(clickable @click="select(3)").text-red.text-weight-bold
							q-item-section Этап 3
							q-item-section(side).text-red Бесконечный цикл
						q-item(clickable @click="select(4)").text-red.text-weight-bold
							q-item-section Этап 4
							q-item-section(side).text-red Список согласующих пуст
						q-item(clickable @click="select(5)").text-orange.text-weight-bold
							q-item-section Этап 5
							q-item-section(side).text-orange Не настроено условие завершения
				q-btn(label="Validate" color="primary" outline icon="mdi-refresh")

	.empty Выберите узел,<br>чтобы просмотреть его свойства.

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useInfo } from '@/stores/info'
import Props from '@/components/Props.vue'
import Journal from '@/components/common/Journal.vue'
import { date } from 'quasar'

const timestamp = Date.now()
const formattedString = date.formatDate(timestamp, 'DD MMMM YY')

const emit = defineEmits(['redraw', 'select'])

const info = useInfo()

const tab = ref('props')
const tab1 = ref('common')

const table = [
	{ label: 'Создано', value: '2021-10-15' },
	{ label: 'Автор', value: 'Орлов П.С.' },
	{ label: 'Утверждено', value: 'Птичкина А.П.' },
]
const table1 = [
	{ label: 'Инициатор', value: 'Сорокина Г.А.' },
	{ label: 'Контрольный срок', value: '15 августа 22' },
	{ label: 'Активный этап', value: '3' },
	{ label: 'Цикл', value: '1' },
]

const tit = computed(() => {
	return info.nodes[0].title
})
const redraw = () => {
	emit('redraw')
}
const select = (e: number) => {
	emit('select', e)
}
</script>

<style scoped lang="scss">
// @import '@/assets/styles/theme.scss';

.tab {
	border-bottom: 1px solid $primary;
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
.trans {
	background: transparent;
	.q-markup-table {
		background: transparent;
	}
}
.q-markup-table .q-table tbody td.link {
	color: var(--q-link);
	cursor: pointer;
}
</style>
