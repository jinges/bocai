<template>
	<article class="nav_header">
		<div v-for="(navItem, oi) in navData">
			<span class="tips fl clear">{{navItem.title}}</span>
			<ul>
				<li 
					:class="{'active': ti == seletedId}" 
					@click="select(oi, ti)"
					v-for="(item, ti) in navItem.childs">{{item.title}}</li>
			</ul>
		</div>
		<p class="clear prompt">{{disc}}<span class="example">范例</span> <span class="help">？</span></p>
	</article>
</template>
<script>
	export default{
		props:{
			navData: Object
		},
		data(){
			return {
				seletedId: -1,
				disc: ''
			}
		},
		methods:{
			select(oi, ti){
				this.seletedId = ti;
				this.disc = this.navData[oi].childs[ti].dist;
				this.$emit('selctedtemp', [oi, ti]);
			}
		}
	}
</script>

