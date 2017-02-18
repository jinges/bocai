<template>
	<article>
		<section class="bar clear">
			<div class="left">
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
			</div>
			<div class="btns">
				<span v-for="(item, index) in ['添加', '加倍', '机选']"
					:class="{'active': active == index}"
					@click="activeFun(index)"
					 >{{item}}</span>
			</div>
		</section>
		<table class="viewNum">
			<tr  v-for="item in selectedData">
				<td>{{item.title}}</td>
				<td>{{item.title}}</td>
				<td>{{item.title}}</td>
				<td>{{item.title}}</td>
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