const element = document.createElement('div')
element.innerHTML = `<div>test</div><div>test</div>`

const nod = [
	{ id: 0, label: 'Старт', group: 'start', level: 0, title: element },
	{ id: 1, label: 'Согласование с производством', group: 'box', level: 1 },
	{ id: 2, label: 'Проверка у юристов', group: 'box', level: 2 },
	{ id: 3, label: 'Финансовый отдел', group: 'box', level: 2 },
	{ id: 4, label: 'Плановый отдел', group: 'finished', level: 2 },
	{ id: 5, label: 'Консолидация', group: 'box', level: 3 },
	{ id: 6, label: 'Сумма больше 1 млн ?', group: 'ext', level: 4 },
	{ id: 7, label: 'Согласование с акционерами', group: 'box', level: 4 },
	{ id: 8, label: 'Подписание', group: 'box', level: 5 },
	{ id: 9, label: 'Регистрация в реестре', group: 'box', level: 6 },
	{ id: 10, label: 'Завершение', group: 'stop', level: 7 },
]
const edg = [
	{ id: undefined, from: 0, to: 1 },
	{ from: 1, to: 2 },
	{ from: 1, to: 3 },
	{ from: 1, to: 4 },
	{ from: 2, to: 5 },
	{ from: 3, to: 5 },
	{ from: 4, to: 5 },
	{ from: 5, to: 6 },
	{ from: 7, to: 8 },
	{ from: 6, to: 7 },
	{ from: 6, to: 8 },
	{ from: 8, to: 9 },
	{ from: 9, to: 10 },
]

export { nod, edg }
