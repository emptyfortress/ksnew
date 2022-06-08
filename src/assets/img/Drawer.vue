<template lang="pug">
q-drawer(:model-value="show" side="left" :mini="colors.mini" :width="width" bordered :class="{ fill : colors.panel }" @update:model-value="$emit('toggle')")
	q-list
		q-item(clickable v-ripple :to="page.url" v-for="page in pages" :key="page.id" )
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section {{ page.title }}

	q-btn(round flat dense :icon="minitoogle" @click="colors.mini = !colors.mini").mini.gt-sm

	br
	br
	br
	q-card(flat transparent)
		q-card-section
			.text-overline Семантика решений
			.row.justify-between.items-center
				div Любой исход
				.line.black
			.row.justify-between.items-center
				div Негативно
				.line.red
			.row.justify-between.items-center
				div Не негативно
				.line.blue
			.row.justify-between.items-center
				div Позитивно
				.line.green
			.row.justify-between.items-center
				div Нейтрально
				.line.grey
			.row.justify-between.items-center
				div Возврат
				.line1
		q-card-section
			.text-overline Этапы и развилки
			.row.justify-between.items-center
				div Старт
				.start
			.row.justify-between.items-center
				div Завершение
				.start.stop
			.row.justify-between.items-center
				div Этап
				.etap Название
			.row.justify-between.items-center
				div Исключающиее Или
				.etap Название
</template>

<script>
import { computed } from 'vue'
import { useColor } from '@/stores/colors'
import SvgIcon from '@/components/SvgIcon.vue'

export default {
	props: ['show'],
	components: { SvgIcon },
	setup() {
		const colors = useColor()
		const pages = [
			{
				id: 0,
				title: 'Супер конструктор',
				icon: 'mdi-crane',
				url: '/ks',
			},
			// {
			// 	id: 1,
			// 	title: 'Dashboard 1',
			// 	icon: 'mdi-home-roof',
			// 	url: '/dashboard1',
			// },
		]
		const width = 256

		const minitoogle = computed(() => {
			return colors.mini ? 'mdi-forwardburger' : 'mdi-backburger'
		})

		return {
			colors,
			width,
			pages,
			minitoogle,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.mini {
	position: absolute;
	bottom: 1rem;
	left: 0.5rem;
	overflow-x: hidden;
}
.bottom {
	border-top: 1px solid var(--my-border-color);
	margin-top: 3rem;
}
.fill {
	color: #fff !important;
	.q-item--active,
	.q-item.q-router-link--active {
		color: #fff;
	}
}
.body--dark {
	.fill .q-item {
		color: #fff !important;
	}
	.fill .q-router-link--active {
		color: var(--q-primary-darken-2) !important;
	}
}
.q-item--active,
.q-item.q-router-link--active {
	background: var(--q-selection);
	color: var(--q-primary-darken-2);
}
.line {
	height: 3px;
	width: 50%;
	background: grey;
	&.black {
		background: black;
	}
	&.red {
		background: red;
	}
	&.blue {
		background: blue;
	}
	&.green {
		background: green;
	}
	&.grey {
		background: grey;
	}
}
.line1 {
	width: 50%;
	height: 2px;
	border-bottom: 3px dashed black;
}
.start {
	width: 30px;
	height: 30px;
	border: 2px solid blue;
	border-radius: 50%;
	&.stop {
		border-width: 6px;
	}
}
.etap {
	font-size: 0.8rem;
	border: 1px solid blue;
	padding: 3px 8px;
	border-radius: 6px;
}
</style>
