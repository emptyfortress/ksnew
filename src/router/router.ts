import { createRouter, createWebHashHistory } from 'vue-router'
import Ks from '@/pages/Ks.vue'
// import Home from '@/pages/Home.vue'

declare module 'vue-router' {
	interface RouteMeta {
		// is optional
		isAdmin?: boolean
		// must be declared by every route
		requiresAuth: boolean
		title: string
	}
}

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			redirect: '/ks',
		},
		// {
		// 	path: '/',
		// 	component: Home,
		// 	meta: { transition: 'slide-left', title: 'Конструктор', requiresAuth: false },
		// },
		{
			path: '/ks',
			component: Ks,
			meta: { transition: 'slide-left', title: 'Конструктор', requiresAuth: false },
		},
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
