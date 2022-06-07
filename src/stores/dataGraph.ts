// import { level } from '@/utils/node'

import { useGraph } from '@/stores/graph'

const mystore = () => {
	return useGraph()
}

// function divInfo(list: number[]) {
// 	const div = document.createElement('div')
// 	div.classList.add('fio-pic')
// 	let images = list.map((item) => {
// 		return `<img src="/img/users/user${item}.svg" />
// 		`
// 	})
// 	let imglist = images.join('')
// 	div.innerHTML = imglist
// 	return div
// }
function hid(node: number) {
	return false
}

const nod = [
	{ id: 0, label: 'Старт', group: 'start', level: 0 },
	{ id: 1, label: 'Согласование с производством', group: 'box', level: 1 },
	{ id: 2, label: 'Проверка у юристов', group: 'box', level: 2 },
	{ id: 3, label: 'Финансовый отдел', group: 'box', level: 2 },
	{
		id: 4,
		label: 'Плановый отдел',
		group: 'finished',
		level: 2,
	},
	{ id: 5, label: 'Консолидация', group: 'box', level: 3 },
	{
		id: 6,
		label: 'Сумма больше 1 млн ?',
		group: 'ext',
		level: 4,
		font: { align: 'left' },
	},
	{ id: 7, label: 'Согласование с акционерами', group: 'box', level: 4 },
	{ id: 8, label: 'Подписание', group: 'box', level: 5 },
	{ id: 9, label: 'Регистрация в реестре', group: 'box', level: 6 },
	{ id: 10, label: 'Завершение', group: 'stop', level: 7 },
	{ id: 11, label: 'one', level: 3, hidden: hid(4) },
	{ id: 12, label: 'two', level: 3, hidden: hid(4) },
	{ id: 13, label: 'three', level: 3, hidden: hid(4) },
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
	{ from: 6, to: 7, label: 'да' },
	{ from: 6, to: 8, label: 'нет' },
	{ from: 8, to: 9 },
	{ from: 9, to: 10 },
	{ from: 4, to: 11 },
	{ from: 11, to: 12 },
	{ from: 12, to: 13 },
	{ from: 13, to: 4 },
]

export { nod, edg }
