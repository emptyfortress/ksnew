import { defineStore } from 'pinia'

export const useInfo = defineStore({
	id: 'info',
	state: () => ({
		infoDrawer: true,
	}),
	getters: {},
	actions: {
		toggle() {
			this.infoDrawer = !this.infoDrawer
		},
	},
})
