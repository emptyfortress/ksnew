<template lang="pug">
.custom-expansions-item
	q-expansion-item(v-model='panels.info' switch-toggle-side label="Информация")
		q-card
			q-card-section Детальный план ввода в эксплуатацию автоматизированной информационной системы государственного заказа Санкт-Петербурга на периода март-май 2020 г.
			q-card-section.q-pt-none

				.columns
					.attribute
						template(v-for='attribute in attributes' :key="attribute.id")
							.label {{ attribute.label }}:
							.value
								div(v-for='el in attribute.value') {{ el }}

				.prim Ознакомьтесь с приложенным документом.

	.actionBt
		q-btn(round flat dense icon="mdi-unfold-more-horizontal" @click="$emit('toggle')")
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'

export default {
	props: ['panels'],
	emits: ['toggle'],
	components: {
		SvgIcon,
	},
	setup() {
		return {
			attributes: [
				{ id: 0, label: 'Вид', value: ['Входящий'] },
				{ id: 1, label: 'Состояние', value: ['Подготовка'] },
				{ id: 2, label: 'Подготовил', value: ['Константинопольский А.'] },
				{ id: 3, label: 'Рег.№', value: ['Вх-1234'] },
				{ id: 4, label: 'Дата регистрации', value: ['19.08.2021'] },
				{
					id: 5,
					label: 'Согласующие',
					value: ['Волков А.', 'Карачева О.', 'Скворцов Г.'],
				},
				{ id: 6, label: 'Подписывает', value: ['Воробьев С.'] },
				{
					id: 7,
					label: 'Получатели',
					value: ['Гусев П.', 'Уткин А.', 'Скворцов Г.', 'Смирнов С.'],
				},
				{ id: 8, label: 'Метка', value: ['значение'] },
			],
		}
	},
}
</script>

<style scoped lang="scss">
// @import '@/assets/styles/theme.scss';

.columns {
	columns: 34ch auto;
	column-gap: 1rem;
}

.attribute {
	display: grid;
	grid-template-columns: [labels] auto [value] 1fr;
	grid-gap: 3px 15px;
}
.attribute .label {
	grid-column: labels;
	opacity: 0.7;
	/* background: pink; */
}
.attribute .value {
	grid-column: value;
	div {
		display: inline-block;
		white-space: nowrap;
		margin-right: 8px;
	}
	div:not(:last-child)::after {
		content: ',';
	}
}
.prim {
	border: 1px solid var(--my-border-color);
	background: #eee;
	margin-top: 1rem;
	&::before {
		content: 'Примечание: ';
		font-weight: bold;
		padding-left: 1rem;
	}
}
</style>
