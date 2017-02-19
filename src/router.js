import index from './views/index.vue'

export default [
	{
		path: '/',  
		name: 'index',
		title: '首页',
		component: require('./views/index.vue')
	},
	{
		path: '/temp1/:id',  
		name: 'index',
		title: '时时彩',
		component: require('./views/template1.vue')
	}
]