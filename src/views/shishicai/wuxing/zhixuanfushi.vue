<template>
	<section>
		<temp @selecters="selectWan" types="w"></temp>
		<temp @selecters="selectQian"types="q"></temp>
		<temp @selecters="selectBai"types="b"></temp>
		<temp @selecters="selectShi"types="s"></temp>
		<temp @selecters="selectGe"types="g"></temp>
		<span @click="sub">点击</span>
		<selected-view :selected-data="selectedData"></selected-view>
	</section>
</template>
<script>
	import temp from './../../../components/circle.vue'
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
			},
			sub(){
				console.log(this.selectedNum.join(''));
			}
		}
	}
</script>