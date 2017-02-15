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
			labText: String
		},
		data(){
			return {
				selectType: ['全','大','小','奇','偶','清'],
				nums: 9,
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
<style lang="sass">
	@import './../assets/sass/style.scss';

	.game-content{
		display: block;
		clear: both;
		padding-left: 50px;
		.tips{
			@extend .element;
			width: 60px;
		    height: 24px;
		    line-height: 24px;
		    display: block;
		    color: #fff;
		    font-size: 12px;
		    text-align: center;
		    background-position: -306px -11px;
		    position: absolute;
    		margin: 13px 0 0 -60px;
		}
		li{
			cursor: pointer;
			text-align: center;
			display: block;
		}
	}
	.number-circle{
		li{
			float: left;
			padding: 5px 9px;
			position: relative;
			.circle{
				width: 40px;
				height: 40px;
				line-height: 40px;
				background-position: -30px 0px;
				&+ label{
					position: absolute;
					left: 9px;
					top: 5px;
					cursor: pointer;
					@extend .circle
				}
				&:checked{
					background-position: -30px -81px;
					&+ label{
						color: #fff;
					}
				}
			}
		}
	}
	.mutilSelect{
		padding: 10px;
		li{
			float: left;
			padding: 2px;
		}
	}
</style>