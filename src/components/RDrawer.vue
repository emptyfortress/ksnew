<template lang="pug">
q-drawer(v-model="show" side="right" bordered)
	Color(:swatches="maincolor")
	q-item
		q-item-section(avatar)
			q-icon( name="mdi-format-text")
		q-item-section
			q-slider(v-model="size" :min="11" :max="18" label color="primary" @change="setSize")
	q-separator
	q-item
		q-toggle( v-model="color.toolbar" label="Color header" color="primary")
	q-item
		q-toggle( v-model="color.panel" label="Color panel" color="primary")
	q-item
		q-toggle( v-model="color.reveal" label="Auto-hide header" color="primary")

	q-separator
	q-item
		q-toggle( v-model="dark" label="Темная тема" color="primary")

</template>

<script>
import { ref, reactive, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useColor } from '@/stores/colors'
import Color from '@/components/Color.vue'

export default {
	props: ['show'],
	components: { Color, },
	setup(props) {
		const dark = ref(false)
		const toolbar = ref(false)
		const panel = ref(false)
		const $q = useQuasar()
		const color = useColor()
		const size = ref(14)

		const maincolor = reactive([
			{ id: 'one', color: 'one', icon: true },
			{ id: 'two', color: 'two', icon: false },
			{ id: 'three', color: 'three', icon: false },
			{ id: 'four', color: 'four', icon: false },
		])
		const link = reactive([])

		const setSize = () => {
			let parameter = '--my-body-font-size'
			let newsize = size.value + 'px'
			document.body.style.setProperty(parameter, newsize)
		}

		watch(
			() => dark.value,
			() => {
				$q.dark.toggle()
			}
		)

		return {
			setSize,
			dark,
			toolbar,
			panel,
			color,
			props,
			maincolor,
			link,
			size,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.q-item {
	color: var(--text-color);
}
</style>
