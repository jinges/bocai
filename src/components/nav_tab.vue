<template>
	<article class="nav_tab">
		<ul class="tabtitle">
			<li @click="selectType(index)" :class="{'active': index == selected}" v-for="(navItem, index) in tabData">{{navItem.title}}</li>
		</ul>
	</article>
</template>
<script>
export default{
	props: {
		tabData: Array
	},
	data(){
		return {
			selected: 1
		}
	},
	methods:{
		selectType(index){
			this.selected = index;
			this.$emit('gametype', index);
		}
	}
}
</script>

