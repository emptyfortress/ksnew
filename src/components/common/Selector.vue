<template lang="pug">
div
	.label {{ props.label }}
	.sel(:class="{'open' : menu }") {{ val }}
		q-menu(v-model="menu").selector
			q-list
				q-item(clickable v-close-popup v-for="(item, index) in props.options" @click="clickHandle(item, index)")
					q-item-section {{ item }}
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
	val: string
	label?: string
	options: string[]
}>()
const emit = defineEmits(['select'])

const menu = ref(false)

const clickHandle = (s: string, n: number) => {
	emit('select', s, n)
}
</script>

<style scoped lang="scss">
.label {
	font-size: 0.7rem;
	color: grey;
}
.sel {
	border-bottom: 1px dotted var(--q-link);
	min-width: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.7rem;
	cursor: pointer;
	&:after {
		content: url("data:image/svg+xml,%3Csvg width='11' height='7' viewBox='0 0 11 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5.5 5.5L10 1' stroke='grey' stroke-width='2'/%3E%3C/svg%3E%0A");
		transition: 0.2s ease all;
	}
	&.open {
		border-bottom: 2px solid var(--q-link);
		&:after {
			transform: rotate(180deg);
		}
	}
}
</style>
