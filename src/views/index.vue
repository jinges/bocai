<template>
	<div class="index">
		<header-panner></header-panner>
		<gm-con></gm-con>
		<nav-tab></nav-tab>
		<left-panner></left-panner>
		<dice></dice>
		<nav-header :nav-data="navHeaderData"></nav-header>
		<tab-list></tab-list>
	</div>
</template>
<script type="text/javascript">
	import navHeader from './../components/nav_header.vue'
	import navTab from './../components/nav_tab.vue'
	import tabList from './../components/right_slider.vue'
	import headerPanner from './../components/header.vue'
	import gmCon from './../components/game_result.vue'
	import leftPanner from './../components/right_nav.vue'
	import dice from './../components/dice.vue'
	
	export default{
		components:{
			navHeader,
			navTab,
			tabList,
			headerPanner,
			gmCon,
			leftPanner,
			dice
		},
		data(){
			return {
				navHeaderData: {
					nav: [
						{
							title: '五星直选',
							list:　[{
								title: '直选复式',
								id:'1',
							},
							{
								title: '直选单式',
								id:'2',
							},
							{
								title: '直选组合',
								id:'3',
							}]
						},
						{
							title: '五星组选',
							list:　[{
								title: '组选120',
								id:'4',
							},
							{
								title: '组选60',
								id:'5',
							}]
						}
					],
					tips: {
						title: '从万位、千位、百位、十位、个位各选一个号码组成一注。',
						bubble: '1'
					}
				}
			}
		}
	}
	
</script>