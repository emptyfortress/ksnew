<script setup lang="ts">
import { ref, computed } from 'vue'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'
import IDrawer from '@/components/IDrawer.vue'
import KDrawer from '@/components/KDrawer.vue'
import { date } from 'quasar'
import { useColor } from '@/stores/colors'
import SvgIcon from '@/components/SvgIcon.vue'
import { useInfo } from '@/stores/info'

const info = useInfo()

const leftDrawer = ref(true)
const rightDrawer = ref(false)

const toggleLeftDrawer = () => {
	leftDrawer.value = !leftDrawer.value
}
const toggleRightDrawer = () => {
	rightDrawer.value = !rightDrawer.value
}

const mycolor = computed(() => {
	return 'one'
})
const colors = useColor()

const calcHeader = computed(() => {
	if (colors.toolbar) {
		return 'head-fill'
	} else return 'head'
})

const calcClass = computed(() => {
	if (colors.panel && colors.mini) {
		return 'fill mini'
	} else if (colors.mini) {
		return 'mini'
	} else if (colors.panel) {
		return 'fill'
	} else return ''
})

// const iconColor = computed(() => {
// 	if (colors.toolbar) {
// 		return 'white'
// 	} else return '#666'
// })

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'dddd, D MMMM')
</script>

<template lang="pug">
#col(:class="mycolor")
	q-layout(view="hHh lpR fFf")
		q-header(:reveal="colors.reveal" :class="calcHeader")
			q-toolbar
				q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer")

				q-toolbar-title.gt-sm
					span {{ formattedString }}
				q-space
				q-btn(dense flat round icon="mdi-magnify")
				q-btn(dense round unelevated color="light-blue-2").q-ml-sm
					q-avatar
						img(src="@/assets/img/users/user0.svg")
						.mybadge
				q-btn(dense flat round icon="mdi-help-circle-outline").q-ml-sm
				q-btn(dense flat round icon="mdi-brightness-4" @click="toggleRightDrawer").q-mx-sm

			.subbar.gt-sm
				.left( v-show="leftDrawer" :class="calcClass").gt-sm
					q-btn(v-if="!colors.mini" dense flat round size="sm" icon="mdi-cog-outline")
					q-btn(v-if="!colors.mini" dense flat round size="sm" icon="mdi-reload")
					q-btn(v-if="!colors.mini" dense flat round size="sm" icon="mdi-pin-off-outline")
					q-btn(v-if="colors.mini" flat icon="mdi-reload").full-width
				.right
					q-btn(unelevated icon="mdi-plus" color="primary-darken-2") Создать
					q-btn(unelevated)
						SvgIcon(name="search-scan")

		Drawer(:show="leftDrawer" @toggle="toggleLeftDrawer")
		RDrawer(:show="rightDrawer")
		KDrawer(:show="info.ksDrawer")
		IDrawer(:show="info.infoDrawer")

		q-page-container
			router-view
			//- //- router-view(v-slot="{ Component, route }")
				transition(name="fade")
					component(:is="Component")

		//- q-footer(bordered).head
			q-toolbar
				q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer")
				q-space
				q-btn(dense flat round icon="mdi-menu" @click="toggleRightDrawer")
</template>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.head,
.head-fill {
	height: 100px;
	line-height: 64px;
	/* border-bottom: 1px solid #fff; */
	@media screen and (max-width: 1024px) {
		height: 48px;
		line-height: 48px;
	}
}

.head {
	/* backdrop-filter: blur(10px); */
	/* -webkit-backdrop-filter: blur(10px); */
	/* background-color: #0000001a; */
	background-color: #d2d2d2;
	color: var(--font-color);
}
.head-fill {
	color: #fff !important;
}
body.body--dark .head {
	background: var(--bg-drawer);
}
.subbar {
	background-color: #cccccc1c;
	color: var(--font-color);
	height: 36px;
	display: flex;
	line-height: 36px;
	.left,
	.right {
		padding: 0 0.5rem;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
	}
	.left {
		width: 256px;
		background: var(--bg-drawer);
		text-align: right;
		color: var(--q-primary);
		color: var(--text-color);
		&.fill {
			background: var(--q-primary);
			color: var(--q-primary-lighten-3);
		}
		&.mini {
			width: 58px;
			text-align: center;
		}
	}
	.right {
		flex-grow: 1;
		padding-left: 0;
		svg.icon {
			width: 1.7rem;
			height: 1.7rem;
		}
	}
}
.head-fill .right svg.icon {
	fill: #fff;
}

.mybadge {
	position: absolute;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	left: -3px;
	bottom: -2px;
	background: green;
	border: 1px solid #fff;
}
</style>
