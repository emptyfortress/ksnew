import { defineStore } from 'pinia'

export const useInfo = defineStore({
	id: 'info',
	state: () => ({
		infoDrawer: true,
		ksDrawer: false,
	}),
	getters: {},
	actions: {
		closeAll() {
			this.infoDrawer = false
			this.ksDrawer = false
		},
		closeInfo() {
			this.infoDrawer = false
		},
		toggle() {
			this.infoDrawer = !this.infoDrawer
		},
		toggleks() {
			this.ksDrawer = !this.ksDrawer
		},
	},
})
