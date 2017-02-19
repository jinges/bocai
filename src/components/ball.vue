<template>
	<article class="game-content">
		<span class="tips">{{labText}}</span>
		<ul class="number-circle fl">
			<li v-for="(index, num) in nums">
				<input type="checkbox" :id="types+num" :value="num"  class="circle element" v-model="selectednumbers">
				<label :for="types+num">{{num}}</label>
			</li>
		</ul>
		<ul class="mutilSelect fl">
			<li v-for="(item, index) in selectType">
				<span class="black-circle" @click="mutilSel(index)">{{item}}</span>
			</li>
		</ul>
	</article>
</template>
<script>

	export default{
		props:{
			types: String,
			labText: String,
			nums: Number
		},
		data(){
			return {
				selectType: ['全','大','小','奇','偶','清'],
				selectednumbers: []
			}
		},
		methods:{
			mutilSel(index) {
				switch(index) {
					case 0:
						this.selectednumbers = [0,1,2,3,4,5,6,7,8,9];
						break;
					case 1:
						this.selectednumbers = [5,6,7,8,9];
						break;
					case 2:
						this.selectednumbers = [0,1,2,3,4];
						break;
					case 3:
						this.selectednumbers = [1,3,5,7,9];
						break;
					case 4:
						this.selectednumbers = [0,2,4,6,8];
						break;
					case 5:
					default:
						this.selectednumbers = [];
						break;
				}
			}
		},
		watch:{
			selectednumbers(val){
				this.$emit('selecters', val)
			}
		}
	}
</script>