const nodes = [
	{
		id: '65630f6c-98e3-e611-815c-d850e6bfb99a',
		name: 'Старт',
		title: 'Согласование группой ответственных договора ДВ-Заказчик (свыше 100 т.р.)',
		desc: 'Маршрут используется для согласования договоров с поставщиками ДВ-Заказчик, с суммой больше 100 т.р',
		first: true,
		taskSendingMode: 0,
		repeatMode: 0,
		startConditionType: 0,
	},
	{
		id: '3c65ef94-f338-e411-80c3-d850e6bfb99a',
		name: 'Консолидация 2-Н',
		first: false,
		taskSendingMode: 0,
		repeatMode: 0,
		startConditionType: 0,
	},
	{
		id: 'd20f78b9-363f-e411-80c4-d850e6bfb99a',
		name: 'Согласование в ГК 2',
		first: false,
		taskSendingMode: 0,
		repeatMode: 0,
		startConditionType: 0,
	},
	{
		id: '9634d936-118f-e311-937c-08606e67d42f',
		name: 'Согласование с контрагентом',
		first: false,
		taskSendingMode: 0,
		repeatMode: 0,
		startConditionType: 3,
	},
	{
		id: 'ea571deb-128f-e311-937c-08606e67d42f',
		name: 'Подписание 2',
		first: false,
		taskSendingMode: 0,
		repeatMode: 0,
		startConditionType: 3,
	},
	{
		id: 'b2d3d551-8fb5-e311-9b94-005056c00008',
		name: 'Подписание контрагентом 2',
		first: false,
		taskSendingMode: 0,
		repeatMode: 0,
		startConditionType: 0,
	},
	{
		id: 'd6bacca7-333f-e411-80c4-d850e6bfb99a',
		name: 'Консолидация 3',
		first: false,
		taskSendingMode: 0,
		repeatMode: 0,
		startConditionType: 3,
	},
]

const edges = [
	{
		decisionSemantics: 2,
		sourceNode: {
			id: '65630f6c-98e3-e611-815c-d850e6bfb99a',
			nodeType: 0,
		},
		targetNode: {
			id: '3c65ef94-f338-e411-80c3-d850e6bfb99a',
			nodeType: 0,
		},
	},
	{
		decisionSemantics: 3,
		sourceNode: {
			id: 'd6bacca7-333f-e411-80c4-d850e6bfb99a',
			nodeType: 0,
		},
		targetNode: {
			id: 'd20f78b9-363f-e411-80c4-d850e6bfb99a',
			nodeType: 0,
		},
	},
	{
		decisionSemantics: 1,
		sourceNode: {
			id: 'd6bacca7-333f-e411-80c4-d850e6bfb99a',
			nodeType: 0,
		},
		targetNode: {
			id: '9634d936-118f-e311-937c-08606e67d42f',
			nodeType: 0,
		},
	},
	{
		decisionSemantics: 1,
		sourceNode: {
			id: 'd20f78b9-363f-e411-80c4-d850e6bfb99a',
			nodeType: 0,
		},
		targetNode: {
			id: '9634d936-118f-e311-937c-08606e67d42f',
			nodeType: 0,
		},
	},
	{
		decisionSemantics: 1,
		sourceNode: {
			id: '9634d936-118f-e311-937c-08606e67d42f',
			nodeType: 0,
		},
		targetNode: {
			id: 'ea571deb-128f-e311-937c-08606e67d42f',
			nodeType: 0,
		},
	},
	{
		decisionSemantics: 3,
		sourceNode: {
			id: '9634d936-118f-e311-937c-08606e67d42f',
			nodeType: 0,
		},
		targetNode: {
			id: 'ea571deb-128f-e311-937c-08606e67d42f',
			nodeType: 0,
		},
	},
	{
		decisionSemantics: 1,
		sourceNode: {
			id: 'ea571deb-128f-e311-937c-08606e67d42f',
			nodeType: 0,
		},
		targetNode: {
			id: 'b2d3d551-8fb5-e311-9b94-005056c00008',
			nodeType: 0,
		},
	},
	{
		decisionSemantics: 1,
		sourceNode: {
			id: '65630f6c-98e3-e611-815c-d850e6bfb99a',
			nodeType: 0,
		},
		targetNode: {
			id: 'd6bacca7-333f-e411-80c4-d850e6bfb99a',
			nodeType: 0,
		},
	},
	{
		decisionSemantics: 3,
		sourceNode: {
			id: '65630f6c-98e3-e611-815c-d850e6bfb99a',
			nodeType: 0,
		},
		targetNode: {
			id: 'd6bacca7-333f-e411-80c4-d850e6bfb99a',
			nodeType: 0,
		},
	},
]

export { nodes, edges }
