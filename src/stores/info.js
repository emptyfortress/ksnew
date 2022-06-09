import { defineStore } from 'pinia'

export const useInfo = defineStore({
	id: 'info',
	state: () => ({
		infoDrawer: false,
		ksDrawer: false,
	}),
	getters: {},
	actions: {
		toggle() {
			this.infoDrawer = !this.infoDrawer
		},
		toggleks() {
			this.ksDrawer = !this.ksDrawer
		},
	},
})
