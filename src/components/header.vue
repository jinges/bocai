<template>
	<article class="header">
		<ul class="login">
			<li class="bor-r"><span class="portrait"></span>qqqq12345</li>
			<li class="bor-r bor-l money">￥0.00</li>
			<li class="bor-r bor-l ">游戏大厅</li>
			<li class="bor-r bor-l "><i class="activity icon"></i><span class="txt">优惠活动</span></li>
			<li class="bor-r bor-l ">银行资料</li>
			<li class="bor-r bor-l ">资金密码</li>
			<li class="bor-r bor-l ">团队统计</li>
			<li class="bor-r bor-l ">转账</li>
			<li class="bor-r bor-l "><i class="pay icon"></i><span class="txt">充值</span></li>
			<li class="bor-r bor-l "><i class="financing icon"></i> <span class="txt">理财</span></li>
			<li class="bor-l "style="color: #ff5c5c"><i class="logout icon"></i><span class="txt">安全退出</span></li>
		</ul>
		<div class="no_login bw">
			<div class="btn-area wb"><a class="btn-login"></a></div>
			<div class="login_form wb">
				<input class="name" type="text" name="" placeholder="请输入用户名">
				<input class="password" type="text" name="" placeholder="请输入登录密码">
				<input class="code" type="text" name="" placeholder="验证码">
				<span class="code-area"><img :src="codeImg" class="codeimg"><span class="code-font">验证码区</span></span>
			</div>
			
		</div>
</template>
<script>
export default{
	data(){
		return{
			codeImg: "/dist/assets/img/code_img.png",
		}
	}
}
</script>