<template lang="pug">
.text-subtitle1.text-weight-bold {{ info.selectedNode.label }}
.custom-expansions-item.flat
	q-expansion-item(v-model="panels[0]" expand-separator switch-toggle-side)
		template(v-slot:header)
			.mygrid
				.hd Цикл 1
				.hd 2022-07-12
		component(:is="SoglTable")
		q-card-section
			.row.justify-start.items-start
				div
					div Старт цикла:
					div Завершение цикла:
				.q-ml-md
					div 2022-07-05
					div 2022-07-12
			br
			.row.justify-start.items-start
				.text-weight-bold Версии документов цикла:
				.q-ml-md
					.link Договор с ООО "Ромашка"
					.link Приложение к договору

	q-expansion-item(v-model="panels[1]" expand-separator switch-toggle-side)
		template(v-slot:header)
			.mygrid
				.hd Цикл 2
				.hd 2022-07-14
		component(:is="SoglTable")
		q-card-section
			.row.justify-start.items-start
				div
					div Старт цикла:
					div Завершение цикла:
				.q-ml-md
					div 2022-07-12
					div 2022-07-14
			br
			.row.justify-start.items-start
				.text-weight-bold Версии документов цикла:
				.q-ml-md
					.link Договор с ООО "Ромашка"
					.link Приложение к договору
q-card-actions.q-mt-xl
	q-btn(label="Печать этапа" icon="mdi-printer-outline" color="primary" flat )
	q-btn(label="Печать маршрута" icon="mdi-printer-outline" color="primary" flat)
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useInfo } from '@/stores/info'
import SoglTable from '@/components/common/SoglTable.vue'

interface SoglColumn {
	name: string
	label: string
	field: string | ((row: any) => any)
	required?: boolean
	align?: 'left' | 'right' | 'center'
	sortable?: boolean
	sort?: (a: any, b: any, rowA: any, rowB: any) => number
	sortOrder?: 'ad' | 'da'
	format?: (val: any, row: any) => any
	style?: string | ((row: any) => string)
	classes?: string | ((row: any) => string)
	headerStyle?: string
	headerClasses?: string
}

interface Row {
	id: number
	fio: string
	res: string
	date: string
}

const columns: SoglColumn[] = [
	{ name: 'fio', label: 'ФИО', align: 'left', field: 'fio', sortable: true },
	{ name: 'res', label: 'Результат', align: 'left', field: 'res', sortable: true },
	{ name: 'date', label: 'Дата', align: 'left', field: 'date', sortable: true },
]

const rows = [
	{ id: 0, fio: 'Орлов П.С.', res: 'Согласовано', date: '2022-05-12' },
	{ id: 1, fio: 'Воробьева Г.К.', res: 'Согл. с замеч.', date: '2022-05-12' },
	{ id: 2, fio: 'Синичкина А.П.', res: 'Отклонено', date: '2022-05-12' },
	{ id: 3, fio: 'Воронов С.Д.', res: 'Ожидает решения', date: '' },
	{ id: 4, fio: 'Жаворонков К.К.', res: 'Ожидает решения', date: '' },
]

const calcClass = (e: Row) => {
	if (e.res === 'Согласовано') {
		return 'pos'
	}
	if (e.res === 'Согл. с замеч.') {
		return 'zam'
	}
	if (e.res === 'Отклонено') {
		return 'neg'
	}
	return ''
}

const info = useInfo()
let panels = ref([false, true])
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.table tr {
	cursor: pointer;
}
.pos {
	background: $light-green-2;
}
.zam {
	background: $orange-2;
}
.neg {
	background: $pink-1;
}
.link {
	color: $primary;
	font-weight: bold;
	text-decoration: underline;
}
.mygrid {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	font-size: 0.9rem;
	div:first-child {
		text-transform: uppercase;
		color: var(--q-link);
		font-weight: bold;
		letter-spacing: 1px;
	}
}
.bottom {
	position: absolute;
	bottom: 0;
}
</style>
