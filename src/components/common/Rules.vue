<template lang="pug">
.grid
	component(:is="Selector" label="Вид" val="На консолидацию" :options="vidOptions")
	.field
		.label Название
		.editable.text-body1(contenteditable) Надо бы доделать
table.dragtable.q-mt-md
	thead
		tr
			th(scope="col" v-for="col in cols" :key="col") {{col}}
	component(:is="draggable" v-model="myArray" @start="drag=true" @end="drag=false" item-key="id" tag="tbody")
		template(#item="{ element }")
			tr
				td(scope="row") {{ element.name }}
				td {{ element.semantic }}
				td
				td
				.bt
					q-btn(round flat dense icon="mdi-trash-can-outline" size="sm" @click="kill(element)")
q-btn(flat label="Добавить" size="sm" color="primary").q-mb-md
.q-mb-md
	q-checkbox(label="Разрешить создавать подчиненные задания" dense v-model="podch")
	q-checkbox(label="Не добавлять решение в лист согласования" dense v-model="notadd")
.label Содержание:
q-input(v-model="text" outlined autogrow dense bg-color="white")
.grid.q-mt-md
	.field
		.label Длительность
		.editable.text-body1(contenteditable) 4 дня
	.field
		.label Длительность указана для:
		q-radio(v-model="dlit" label="этапа" dense val="one").q-mr-md
		q-radio(v-model="dlit" label="задания" dense val="two")
.q-my-md
	q-checkbox(label="Автоматическое завершение по истечении срока" dense v-model="auto")
	div(style="width: 200px").q-pb-md.q-mt-md
		component(:is="Selector" :val="sem" label="Семнатика завершения" :options="semOptions")

</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import Selector from '@/components/common/Selector.vue'

const drag = ref(false)
const podch = ref(false)
const auto = ref(false)
const notadd = ref(false)
const sem = ref('Положительная')
const dlit = ref('one')
const cols = ['Название', 'Семантика', 'Иконка', 'Метка']
const vidOptions = ['На консолидацию', 'На согласование', 'На исполнение']
const semOptions = [
	'Положительно',
	'Условно-положительное',
	'Отрицательное',
	'Отмена',
	'Новый цикл',
	'Завершение',
]
const myArray = ref([
	{ id: 0, name: 'Продолжить', semantic: 'Положительно' },
	{ id: 1, name: 'На пересогласование', semantic: 'Возврат на предыдущий' },
	{ id: 2, name: 'Отменить согласование', semantic: 'Отмена' },
])
const kill = (e: any) => {
	console.log(e)
	const index = myArray.value.indexOf(e)
	myArray.value.splice(index, 1)
}
const text = 'Вам поступило задание на консолидацию'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.grid {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 1rem;
}
</style>
