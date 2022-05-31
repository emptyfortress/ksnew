<template lang="pug">
.q-px-md
	h4 Палитра цветов
	.palitra
		div
			q-btn(unelevated color="primary" ).full-width primary
			q-btn(unelevated color="primary-selection" text-color="primary-darken-2").full-width selection
		div
			q-btn(unelevated color="primary-lighten-1" text-color="primary-darken-3").full-width lighten-1
			q-btn(unelevated color="primary-lighten-2" text-color="primary-darken-3").full-width lighten-2
			q-btn(unelevated color="primary-lighten-3" text-color="primary-darken-2").full-width lighten-3
		div
			q-btn(unelevated color="primary-darken-1" ).full-width darken-1
			q-btn(unelevated color="primary-darken-2" ).full-width darken-2
			q-btn(unelevated color="primary-darken-3" ).full-width darken-3

	q-separator
	br
	p Кнопки:
	p
		q-btn(unelevated ).q-mr-sm default
		q-btn(unelevated color="white" text-color="black").q-mr-sm flat
		q-btn(unelevated outline color="primary").q-mr-sm outline
		q-btn(unelevated outline rounded color="primary").q-mr-sm rounded
		q-btn(unelevated push color="primary").q-mr-sm push
	p
		q-btn(unelevated color="primary").q-mr-sm primary
		q-btn(unelevated color="accent").q-mr-sm accent
		q-btn(unelevated color="positive").q-mr-sm positive
		q-btn(unelevated color="negative").q-mr-sm negative
		q-btn(unelevated color="info").q-mr-sm info
		q-btn(unelevated color="warning").q-mr-sm warn
		q-btn(unelevated color="dark").q-mr-sm dark
	p
		br
		router-link(to="/") Это пример линка, это пример линка, это пример линка.
	p
		q-toggle(v-model="dark" :color="colors.primary")

	br
	q-card.test
		.text-h6 Панель
	br
	br
	p(v-for="n in 7") Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.


</template>

<script>
import { useCounter } from '@/stores/counter'
import { useColor } from '@/stores/colors'
import { ref } from 'vue'

export default {
	setup() {
		const counter = useCounter()

		const add = () => {
			counter.increment()
		}
		const dark = ref(true)

		const colors = useColor()

		return {
			colors,
			add,
			counter,
			dark,
		}
	},
}
</script>

<style scoped lang="scss">
.palitra {
	display: grid;
	grid-template-columns: repeat(3, 200px);
	gap: 1rem;
	margin-bottom: 2rem;
	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr;
	}
	.color {
		height: 50px;
		width: 100%;
	}
}
.test {
	height: 200px;
	width: 50%;
	padding: 1rem;
}
.q-btn {
	margin-bottom: 0.5rem;
}
</style>
