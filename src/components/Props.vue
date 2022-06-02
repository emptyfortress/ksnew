<template lang="pug">
.tip
	div Тип:
	.etap этап
		q-menu
			q-list
				q-item(clickable v-close-popup) Этап
				q-item(clickable v-close-popup) Условие
				q-item(clickable v-close-popup) Старт
				q-item(clickable v-close-popup) Завершение
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.tip {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
}
.etap {
	padding: 2px 14px;
	background: white;
	border: 1px solid blue;
	border-radius: 4px;
	cursor: pointer;
}
</style>
