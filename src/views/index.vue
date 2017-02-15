<template>
	<div class="index">
		<nav-header :nav-data="navHeaderData"></nav-header>
	</div>
</template>
<script type="text/javascript">
	import navHeader from './../components/nav_header.vue'

	export default{
		components:{
			navHeader
		},
		data(){
			return {
				navHeaderData: [
					{
						title: '五星直选',
						list:　[{
							title: '直选复式',
							id:'1',
						},
						{
							title: '直选单式',
							id:'2',
						}]
					},
					{
						title: '五星组选',
						list:　[{
							title: '组选120',
							id:'3',
						},
						{
							title: '组选60',
							id:'4',
						}]
					}
				]
			}
		}
	}
	
</script>