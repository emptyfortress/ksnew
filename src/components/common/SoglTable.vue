<template lang="pug">
q-table(:rows="rows"
	:columns="columns"
	row-key="id"
	hide-bottom
	flat
	).table
	template(v-slot:body="props")
		q-tr(:props="props" :class="calcClass(props.row)" @click="props.expand = !props.expand")
			q-td(v-for="col in props.cols" :key="col.name" :props="props") {{ col.value }}
		q-tr(v-show="props.expand && props.row.res === 'Согл. с замеч.'" :props="props" :class="calcClass(props.row)")
			q-td(colspan="100%" style="white-space: normal;")
				.text-left
					span.text-bold.q-mr-md Замечания:
					span In mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci, ac. Et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo?
				.text-left.q-mt-md
					span.text-bold.q-mr-md Файл замечаний:
					span.link filename.txt
		q-tr(v-show="props.expand && props.row.res === 'Отклонено'" :props="props" :class="calcClass(props.row)")
			q-td(colspan="100%")
				.text-left
					span.text-bold.q-mr-md Файл замечаний:
					span.link filename.txt
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useInfo } from '@/stores/info'

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
</style>
