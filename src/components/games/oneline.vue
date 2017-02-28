<template>
	<section class="game">
		<temp @selecters="selecter" :lab-text="obj.labText" types="w"  :nums='obj.nums'></temp>
	</section>
</template>
<script>
	import temp from './../ball.vue'

	export default{
		props: {
			obj: Object
		},
		components:{
			temp
		},
		data(){
			return {
				selectedNum: []
			}
		},
		methods:{
			selecter(val){
				this.selectedNum = val.join('');
			}
		}
	}
</script>