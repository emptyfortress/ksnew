<template lang="pug">
table.dragtable
	thead
		tr
			th(scope="col") Согласующий
			th(scope="col") Тип
	component(:is="draggable" v-model="myArray" @start="drag=true" @end="drag=false" item-key="id" tag="tbody")
		template(#item="{ element }")
			tr
				td(scope="row") {{ element.name }}
				td {{ element.typ }}
				.bt
					q-btn(round flat dense icon="mdi-trash-can-outline" size="sm" @click="kill(element)")
q-btn(flat label="Добавить" size="sm" color="primary" @click="dialog = true").q-mb-md

q-dialog(v-model="dialog")
	q-card.dialog
		q-card-section.row.items-center.q-pb-none
			.hd Добавить согласующего
			q-space
			q-btn(icon="mdi-close" flat round v-close-popup)
		q-card-section.myrow
			q-radio(v-model="sel" :val="1")
			q-select(v-model="typ" :options="typOptions" dense label="Тип")
			q-select(v-model="val" :options="valOptions" dense label="Значение")
		q-card-section.myrow
			q-radio(v-model="sel" :val="2")
			label Выбрать из справочника:
			q-select(v-model="chose" dense option="typOptions" )
				template(v-slot:prepend)
					q-icon(name="mdi-book-open-page-variant-outline")
		q-card-section
			q-card-actions
				q-space
				q-btn(flat color="primary" label="Отмена" v-close-popup)
				q-btn(unelevated color="primary" label="Добавить" @click="add")


</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const myArray = ref([
	{ id: 0, name: 'Инициатор', typ: 'Поисковые слова' },
	{ id: 1, name: 'Согласование договоров', typ: 'Группа' },
])
const drag = ref(false)
const dialog = ref(false)

const kill = (e: any) => {
	console.log(e)
	const index = myArray.value.indexOf(e)
	myArray.value.splice(index, 1)
}
const sel = ref(1)
const typ = ref('')
const typOptions = ['Поисковые слова', 'Группа', 'Роль', 'Должность']
const val = ref('')
const chose = ref('')
const valOptions = ['Инициатор', 'Согласующий по документу', 'Консолидатор']

const add = () => {
	console.log(typ.value, val.value)
	myArray.value.push({
		id: myArray.value.length,
		name: val.value,
		typ: typ.value,
	})
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.dialog {
	width: 640px;
}
.hd {
	font-size: 1.1rem;
	text-transform: uppercase;
	font-weight: 500;
}
.myrow {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	.q-select {
		width: 45%;
	}
}
</style>
