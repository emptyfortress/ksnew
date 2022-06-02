<template lang="pug">
q-list
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[0]" expand-separator label="Общие" switch-toggle-side)
			q-card(flat)
				q-card-section
					.row.justify-start
						.tip
							q-select(filled v-model="tip" dense :options="tipOptions" label="Тип")
							.etap(v-if="tip === 'Этап'") этап
							q-img(src="@/assets/img/bt-condition.svg" v-if="tip === 'Условие'" height="32px" width="32px" fit="scale-down")
							q-img(src="@/assets/img/bt-start.svg" v-if="tip === 'Старт'" height="32px" width="32px" fit="scale-down")
							q-img(src="@/assets/img/bt-stop.svg" v-if="tip === 'Завершение'" height="32px" width="32px" fit="scale-down")
						q-select(filled v-model="shablon" dense label="Шаблон этапа")
		.actionBt
			q-btn(round flat dense icon="mdi-unfold-more-horizontal" @click="toggle")
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[1]" expand-separator label="Список согласующих" switch-toggle-side)
			q-card
				q-card-section Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Augue neque, gravida in fermentum et, sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
	.custom-expansions-item.flat
		q-expansion-item(v-model="panels[2]" expand-separator label="Служебные" switch-toggle-side)
			q-card
				q-card-section Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Augue neque, gravida in fermentum et, sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
		q-expansion-item(v-model="panels[3]" expand-separator label="Связанные маршруты" switch-toggle-side)
			q-card
				q-card-section Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Augue neque, gravida in fermentum et, sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

let panels = ref([true, true, false, false])
const toggle = () => {
	const fal = (item) => item === false
	panels.value.some(fal)
		? (panels.value = panels.value.map((item) => (item = true)))
		: (panels.value = panels.value.map((item) => (item = false)))
}

const tip = ref('Этап')
const shablon = ref('Простой')
const tipOptions = ['Этап', 'Условие', 'Старт', 'Завершение']

const calcClass = computed(() => {
	switch (tip.value) {
		case 'Этап':
			return 'etap'
		default:
			return ''
	}
})
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
.q-select {
	min-width: 150px;
}
</style>
