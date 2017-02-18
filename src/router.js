import index from './views/index.vue'

export default [
	{
		path: '/',  
		name: 'index',
		title: '首页',
		component: require('./views/index.vue')
	},
	{
		path: '/ssc',  
		name: 'index',
		title: '首页',
		component: require('./views/shishicai/wuxing/zhixuanfushi.vue')
	}
]