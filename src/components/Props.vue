<template lang="pug">
.row.justify-between.items-center
	q-toggle(:model-value="active" label="Активен" @update:model-value="toggleNode")
	div
		span Длительность
		span.dlit(contenteditable) 0
q-list
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[0]" expand-separator label="Общие свойства" switch-toggle-side)
			q-card(flat)
				q-card-section
					.grid
						div
							.label Название
							.editable.text-body1(contenteditable) {{ info.selectedNode.label }}
						div
							.label Описание
							.editable.text-body1(contenteditable)
				.rowgap.q-mx-md
					component(:is="Selector" :val="tip" label="Режим" :options="tipOptions" @select="setTip")
					component(:is="Selector" :val="shablon" label="Маршрутизация" :options="shablonOptions" @select="setShablon")
				q-card-section.column
					q-checkbox(dense label="Разрешить исключать этап из маршрута" v-model="check1" disable)
					q-checkbox(dense label="Разрешить редактирование инициатору" v-model="check2" disable)
					q-checkbox(dense label="Требуется конслолидация после завершения" v-model="check3" disable)
					q-checkbox(dense label="Пропускать при повторе" v-model="check3" disable)
		.actionBt
			q-btn(round flat dense icon="mdi-unfold-more-horizontal" @click="toggle")
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[1]" expand-separator label="Условие старта" switch-toggle-side)
			q-card.sog
				.brd(v-if="!info.selectedNode.first && !info.selectedNode.last")
					q-checkbox(v-model="info.selectedNode.startcheck" dense label="Первый" disable )
					Selector(label="Повторять внутри цикла" :options="repeat" val="Всегда")
				q-list(dense)
					q-item(v-for="item in info.selectedNode.start")
						q-item-section(avatar)
							q-img(src="@/assets/img/cond-and.svg" v-if="item.icon === 0" width="36px")
							q-img(src="@/assets/img/cond-or.svg" v-if="item.icon === 1" width="36px")
						q-item-section {{ item.title }}
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[2]" expand-separator label="Список согласующих" switch-toggle-side)
			SoglRule
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[3]" expand-separator label="Служебные" switch-toggle-side)
			q-card
				q-card-section Служебная информация
		q-expansion-item(v-model="panels[4]" expand-separator label="Связанные маршруты" switch-toggle-side)
			q-card
				q-card-section Связанные маршруты
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useInfo } from '@/stores/info'
import Selector from '@/components/common/Selector.vue'
import SoglRule from '@/components/common/SoglRule.vue'

const emit = defineEmits(['redraw'])

const info = useInfo()
const active = computed(() => {
	return info.selectedNode.active
})

const toggleNode = () => {
	info.toggleNode()
	emit('redraw')
}

let panels = ref([false, false, true, false, false])
const toggle = () => {
	const fal = (item: boolean) => item === false
	panels.value.some(fal)
		? (panels.value = panels.value.map((item) => (item = true)))
		: (panels.value = panels.value.map((item) => (item = false)))
}

const check1 = ref(true)
const check2 = ref(false)
const check3 = ref(false)
const tip = ref('Согласование')
const shablon = ref('Последовательно')
const tipOptions = ['Согласование', 'Консолидация', 'Подписание']
const shablonOptions = ['Последовательно', 'Параллельно']
const repeat = [
	'Всегда',
	'Никогда',
	'Если был завершен отрицательно',
	'Для отказавших',
	'Для отказавших, если менялся файл',
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
.dlit {
	display: inline-block;
	width: 40px;
	border-bottom: 1px dotted var(--q-link);
	border-radius: 1px;
	text-align: center;
	margin-left: 0.5rem;
	&:focus {
		outline: 2px solid orange;
		outline-offset: 2px;
		border: none;
	}
}
.brd {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	margin-bottom: 0.5rem;
	justify-content: space-between;
}
</style>
