import { defineStore } from 'pinia'

export const useCounter = defineStore({
	id: 'counter',
	state: () => ({
		count: 1,
	}),
	getters: {
		doubleCount() {
			return this.count * 2
		},
		doublePlusOne() {
			return this.doubleCount + 1
		},
	},
	actions: {
		increment() {
			this.count++
		},
	},
})
