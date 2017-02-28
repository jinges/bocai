<template>
	<section class="game">
		<temp @selecters="selectWan" lab-text="万位" types="w" :nums='nums'></temp>
		<temp @selecters="selectQian" lab-text="千位" types="q" :nums='nums'></temp>
		<temp @selecters="selectBai" lab-text="百位" types="b" :nums='nums'></temp>
		<temp @selecters="selectShi" lab-text="十位" types="s" :nums='nums'></temp>
		<temp @selecters="selectGe" lab-text="个位" types="g" :nums='nums'></temp>
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
				result: '',
				nums: 10
			}
		},
		methods:{
			selectWan(val){
				this.selectedNum[0] = val.join('');
				this.result = this.selectedNum.join(',');
			},
			selectQian(val){
				this.selectedNum[1] = val.join('');
				this.result = this.selectedNum.join(',');
			},
			selectBai(val){
				this.selectedNum[2] = val.join('');
				this.result = this.selectedNum.join(',');
			},
			selectShi(val){
				this.selectedNum[3] = val.join('');
				this.result = this.selectedNum.join(',');
			},
			selectGe(val){
				this.selectedNum[4] = val.join('');
				this.result = this.selectedNum.join(',');
			}
		},
		watch:{
			result: function(arr){
				arr = arr.split(',');
				if(arr.length<5){
					return false;
				}
				this.$emit('selected', arr);
			}
		}
	}
</script>