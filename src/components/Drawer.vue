<template lang="pug">
q-drawer(:model-value="show" side="left" :mini="colors.mini" :width="width" bordered :class="{ fill : colors.panel }" @update:model-value="$emit('toggle')")
	q-list
		q-item(clickable v-ripple :to="page.url" v-for="page in pages" :key="page.id" )
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section {{ page.title }}

	q-btn(round flat dense :icon="minitoogle" @click="colors.mini = !colors.mini").mini.gt-sm
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
				title: 'Вертикальный борщ',
				icon: 'mdi-allergy',
				url: '/card',
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
</style>
