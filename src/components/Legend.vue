<template lang="pug">
q-card
	.text-overline Семантика решений
	.row.justify-between.items-center
		div Любой исход
		.line.black
	.row.justify-between.items-center
		div Негативно
		.line.red
	.row.justify-between.items-center
		div Не негативно
		.line.blue
	.row.justify-between.items-center
		div Позитивно
		.line.green
	.row.justify-between.items-center
		div Нейтрально
		.line.grey
	.row.justify-between.items-center
		div Возврат
		.line1
	.text-overline Этапы и развилки
	.row.justify-between.items-center.q-mb-xs
		div Старт
		q-img(src="@/assets/img/start.svg" fit="contain")
	.row.justify-between.items-center.q-mb-xs
		div Завершение
		q-img(src="@/assets/img/stop.svg" fit="contain")
	.row.justify-between.items-center.q-mb-xs
		div Исключающиее ИЛИ
		q-img(src="@/assets/img/ore.svg" fit="contain")
	.row.justify-between.items-center.q-mb-xs
		div Включающее ИЛИ
		q-img(src="@/assets/img/ori.svg" fit="contain")
	.row.justify-between.items-center.q-mb-xs
		div Оператор И
		q-img(src="@/assets/img/and.svg" fit="contain")
	.row.justify-between.items-center
		div Сложный оператор
		q-img(src="@/assets/img/complex.svg" fit="contain")
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.q-card {
	font-size: 0.7rem;
	width: 180px;
	position: relative;
	padding: 0 8px 4px 8px;
}
.q-img {
	height: 19px;
	width: 19px;
}
.line {
	height: 3px;
	width: 40%;
	background: grey;
	&.black {
		background: black;
	}
	&.red {
		background: red;
	}
	&.blue {
		background: blue;
	}
	&.green {
		background: green;
	}
	&.grey {
		background: grey;
	}
}
.line1 {
	width: 40%;
	height: 2px;
	border-bottom: 3px dashed black;
}
</style>
