<template>
	<article class="nav_header">
		<div v-for="navItem in navData">
			<span class="tips fl clear">{{navItem.title}}</span>
			<ul>
				<li 
					:class="{'active': item.id == seletedId}" 
					@click="select(item.id)"
					v-for="item in navItem.list">{{item.title}}</li>
			</ul>
		</div>
	</article>
</template>
<script>
	export default{
		props:{
			navData: Array
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

