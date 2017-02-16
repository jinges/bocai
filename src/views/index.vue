<template>
	<div class="index">
		<nav-tab></nav-tab>
		<nav-header :nav-data="navHeaderData"></nav-header>
		<tab-list></tab-list>
	</div>
</template>
<script type="text/javascript">
	import navHeader from './../components/nav_header.vue'
	import navTab from './../components/nav_tab.vue'
	import tabList from './../components/tab_list.vue'

	export default{
		components:{
			navHeader,
			navTab,
			tabList
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