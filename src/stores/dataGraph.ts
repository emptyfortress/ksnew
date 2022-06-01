function divInfo(list: number[]) {
	const div = document.createElement('div')
	div.classList.add('fio-pic')
	let images = list.map((item) => {
		return `<img src="/img/users/user${item}.svg" />
		`
	})
	let imglist = images.join('')
	div.innerHTML = imglist
	return div
}

const nod = [
	{ id: 0, label: 'Старт', group: 'start', level: 0, title: divInfo([0]) },
	{ id: 1, label: 'Согласование с производством', group: 'box', level: 1, title: divInfo([1, 2]) },
	{ id: 2, label: 'Проверка у юристов', group: 'box', level: 2, title: divInfo([1, 2, 3]) },
	{ id: 3, label: 'Финансовый отдел', group: 'box', level: 2, title: divInfo([4, 5]) },
	{ id: 4, label: 'Плановый отдел', group: 'finished', level: 2, title: divInfo([1, 6, 2, 4]) },
	{ id: 5, label: 'Консолидация', group: 'box', level: 3, title: divInfo([5]) },
	{
		id: 6,
		label: 'Сумма больше 1 млн ?',
		group: 'ext',
		level: 4,
		font: { align: 'left' },
	},
	{ id: 7, label: 'Согласование с акционерами', group: 'box', level: 4, title: divInfo([5, 4, 3]) },
	{ id: 8, label: 'Подписание', group: 'box', level: 5, title: divInfo([6, 2]) },
	{ id: 9, label: 'Регистрация в реестре', group: 'box', level: 6, title: divInfo([1]) },
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
	{ from: 6, to: 7, label: 'да', title: 'да' },
	{ from: 6, to: 8, label: 'нет', title: 'нет' },
	{ from: 8, to: 9 },
	{ from: 9, to: 10 },
]

export { nod, edg }
