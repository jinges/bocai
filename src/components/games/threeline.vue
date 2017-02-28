<template>
	<section class="game">
		<temp @selecters="selectWan" lab-text="万位" types="w"></temp>
		<temp @selecters="selectQian" lab-text="千位" types="q"></temp>
		<temp @selecters="selectBai" lab-text="百位" types="b"></temp>
	</section>
</template>
<script>
	import temp from './../ball.vue'

	export default{
		components:{
			temp
		},
		data(){
			return {
				selectedNum: [],
				selectedData: [{
					title: '测试',
					selNum: 24567
				},
				{
					title: '测试2',
					selNum: 45673
				}]
			}
		},
		methods:{
			selectWan(val){
				this.selectedNum[0] = val.join('');
			},
			selectQian(val){
				this.selectedNum[1] = val.join('');
			},
			selectBai(val){
				this.selectedNum[2] = val.join('');
			},
			selectShi(val){
				this.selectedNum[3] = val.join('');
			},
			selectGe(val){
				this.selectedNum[4] = val.join('');
			}
		}
	}
</script>