<template>
	<article class="nav_header">
		<div v-for="navItem in navData.nav">
			<span class="tips fl clear">{{navItem.title}}</span>
			<ul>
				<li 
					:class="{'active': item.id == seletedId}" 
					@click="select(item.id)"
					v-for="item in navItem.list">{{item.title}}</li>
			</ul>
		</div>
		<p class="clear prompt">{{navData.tips.title}}</p>
	</article>
</template>
<script>
	export default{
		props:{
			navData: Object
		},
		data(){
			return {
				seletedId: -1
			}
		},
		methods:{
			select(index){
				this.seletedId = index;
			}
		}
	}
</script>

