<template>
	<article class="nav_header">
		<div v-for="(navItem, oi) in navData">
			<span class="tips fl clear">{{navItem.title}}</span>
			<ul>
				<li 
					v-for="(item, ti) in navItem.childs"
					:class="{'active': ti == childId && oi == navId}" 
					@click="select(item, ti, oi)"
				>{{item.title}}</li>
			</ul>
		</div>
		<p class="clear prompt">{{disc}}<span class="example">范例</span> <span class="help">？</span></p>
	</article>
</template>
<script>
	export default{
		props:{
			navData: Array
		},
		data(){
			return {
				navId: -1,
				childId: -1,
				disc: ''
			}
		},
		methods:{
			select(item, ti, oi){
				this.navId = oi;
				this.childId = ti;
				this.disc = item.dist;
				this.$emit('selctedtemp', item);
			}
		}
	}
</script>

