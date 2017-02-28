<template>
	<article class="right_slider">
		<right-nav></right-nav>
		<div class="tab_list">
			<div class="header"><span>彩种</span><span>期号</span><span>投注内容</span><span>盈亏</span></div>
			<ul>
				<li>暂无数据</li>
				<li><span>数据</span><span>数据</span><span>数据</span><span>数据</span></li>
			</ul>
			<div class="footer">
				<a>刷新</a>
				<a style="float:right">更多...</a>
			</div>
		</div>
		<div class="sign">
			<div class="sign-head">总注数:3注，总金额：16元</div>
			<div class="progress">
				<span class="line"></span>
				<i class="ball"></i>
			</div>
			<ul class="sign-foot">
				<li>0.0%<br>当期返点</li>
				<li>+180000<br>当前奖金</li>
				<li>*900000<br>当前赔率</li>
			</ul>
		</div>
		<div class="btn-box">
			<a class="up"></a>
			<a class="down"></a>
			<ul class="btn-list">
				<li class="zh "></li>
				<li class="zg active"></li>
				<li class="gj "></li>
			</ul>
		</div>
	</article>
</template>
<script>
	import rightNav from './../components/right_nav.vue';
	export default {
		components: {
			rightNav
		}
	}
</script>