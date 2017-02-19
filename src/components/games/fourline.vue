<template>
	<section>
		<temp @selecters="selectWan" lab-text="万位" types="w"></temp>
		<temp @selecters="selectQian" lab-text="千位" types="q"></temp>
		<temp @selecters="selectBai" lab-text="百位" types="b"></temp>
		<temp @selecters="selectShi" lab-text="十位" types="s"></temp>
		<temp @selecters="selectGe" lab-text="个位" types="g"></temp>
		<selected-view :selected-data="selectedData"></selected-view>
	</section>
</template>
<script>
	import temp from './../../../components/ball.vue'
	import selectedView from './../../../components/selectedView.vue'

	export default{
		components:{
			temp,
			selectedView
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