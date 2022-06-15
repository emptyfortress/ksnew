<template lang="pug">
q-toggle(:model-value="active" label="Активен" @update:model-value="toggleNode")
q-list
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[0]" expand-separator label="Общие" switch-toggle-side)
			q-card(flat)
				q-card-section
					.grid
						div
							.label Название
							.editable.text-body1(contenteditable) {{ info.selectedNode.label }}
						div
							.label Описание
							.editable.text-body1(contenteditable)
				q-card-section
					.rowgap
						component(:is="Selector" :val="tip" label="Тип этапа" :options="tipOptions" @click="setTip")
						component(:is="Selector" :val="shablon" label="Шаблон этапа" :options="shablonOptions" @click="setShablon")
				q-card-section.column
					q-checkbox(dense label="Разрешить исключать этап из маршрута" v-model="check1" disable)
					q-checkbox(dense label="Разрешить редактирование инициатору" v-model="check2" disable)
					q-checkbox(dense label="Требуется конслолидация после завершения" v-model="check3" disable)
		.actionBt
			q-btn(round flat dense icon="mdi-unfold-more-horizontal" @click="toggle")
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[1]" expand-separator label="Условие старта" switch-toggle-side)
			q-card.sog
				q-list(dense)
					q-item(v-for="item in info.selectedNode.start")
						q-item-section(avatar)
							q-img(src="@/assets/img/cond-and.svg" v-if="item.icon === 0" width="36px")
							q-img(src="@/assets/img/cond-or.svg" v-if="item.icon === 1" width="36px")
						q-item-section {{ item.title }}
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[2]" expand-separator label="Список согласующих" switch-toggle-side)
			q-card
				q-card-section Rhoncus aenean
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[3]" expand-separator label="Служебные" switch-toggle-side)
			q-card
				q-card-section Rhoncus aenean
		q-expansion-item(v-model="panels[4]" expand-separator label="Связанные маршруты" switch-toggle-side)
			q-card
				q-card-section Rhoncus aenean
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useInfo } from '@/stores/info'
import Selector from '@/components/common/Selector.vue'

const info = useInfo()
const active = computed(() => {
	return info.selectedNode.active
})

const toggleNode = () => {
	info.toggleNode()
}

let panels = ref([false, true, false, false, false])
const toggle = () => {
	const fal = (item: boolean) => item === false
	panels.value.some(fal)
		? (panels.value = panels.value.map((item) => (item = true)))
		: (panels.value = panels.value.map((item) => (item = false)))
}

const check1 = ref(true)
const check2 = ref(false)
const check3 = ref(false)
const tip = ref('Этап')
const shablon = ref('Простой')
const tipOptions = ['Этап', 'Условие', 'Старт', 'Завершение']
const shablonOptions = [
	'Простой',
	'Бухгалтерия',
	'Плановый отдел',
	'Шаблон 1',
	'Шаблон 2',
	'Шаблон 3',
]

const setTip = (e: string) => {
	tip.value = e
}
const setShablon = (e: string) => {
	shablon.value = e
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.tip {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;
	margin-right: 3rem;
	margin-bottom: 0.5rem;
}
.etap {
	padding: 4px 14px;
	background: white;
	border: 1px solid blue;
	border-radius: 4px;
	cursor: pointer;
}
.label {
	font-size: 0.7rem;
	color: grey;
}
.editable {
	border-bottom: 1px dotted var(--q-link);
	border-radius: 1px;
	&:focus {
		outline: 2px solid orange;
		outline-offset: 2px;
		border: none;
	}
	// cursor: pointer;
}
.grid {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 2rem;
}
.rowgap {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	gap: 2rem;
}
.sog {
	margin: 0 0 1rem 0;
	// border: 1px solid #ccc;
	// box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
}
</style>
