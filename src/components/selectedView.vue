<template>
	<article>
		<section class="bar clear">
			<div>
				<span class="fl">共0注</span>
				<div class="count fl">
					<i class="element">-</i>
					<input type="text"  class="element">
					<i class="element">+</i>
				</div>
				<div class="money fl">
					<i class="black-circle">元</i>
					<i class="black-circle">角</i>
					<i class="black-circle">分</i>
					<i class="black-circle">厘</i>
					<span>金额：0元</span>
				</div>
				<div class="btns">
					<span v-for="(item, index) in ['添加', '加倍', '机选']"
						:class="{'active': active == index}"
						@click="activeFun(index)"
						 >{{item}}</span>
				</div>
			</div>
		</section>
		<table class="viewNum">
			<tr  v-for="item in selectedData">
				<td>{{item.title}}</td>
			</tr>
		</table>
	</article>
</template>
<script type="text/javascript">
	export default{
		props:{
			selectedData: Array
		},
		data(){
			return {
				active: 0
			}
		},
		methods:{
			activeFun(index){
				let that = this;
				this.active = index;
				setTimeout(()=>{
					that.active = 0;
				}, 200)
			}
		}
	}
</script>
<style lang="sass">
	@import './../assets/sass/style.scss';

	.bar{
		background: url(./../assets/img/touzhu.png) 0 0 no-repeat;
		.count{
			input{
				width: 50px;
				height: 24px;
				display:inline-block;
				@extend .element;
			    background-position: -145px -89px;
			}
			i{
			    width: 24px;
			    height: 24px;
			    display: inline-block;
				@extend .element;
			    background-position: -129px -121px;
			}
		}
		.btns{
			float: right;
			width: 192px;
			height: 28px;
			display: inline-block;
			@extend .element;
			background-position: -145px -166px;
			span{
				float: left;
				width: 57px;
				height: 28px;
				line-height: 28px;
				display: block;
				text-align: center;
				font-size: 12px;
				color: #fff;
				cursor: pointer;
				&.active{
					width: 74px;
					color: #FED083;
					@extend .element;
					background-position: -145px -138px;
				}
			}
		}
	}
</style>