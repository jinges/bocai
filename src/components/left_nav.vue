<template>
	<article>
		<a class="logo"><img src="/dist/assets/img/logo.png" alt="logo"></a>
		<div  class="left_nav"  :class="{'close':leftopen}">
			<div class="title back" @click="goback" :class="{'show': backshow}">返回</div>
			<ul>
				<li v-for="(item, index) in data" :class="{'hide': openId != index && backshow && index >0}">
					<div class="title" @click="toggle(index)">
						<span class="zlogo" :class="'a'+index"></span>
						<!-- {{item.title}} -->
						标题拉拉{{index}}
					</div>
					<ul class="childs" :class="{'open':openId == index}">
						<li v-for="nItem in item.childs">标题{{index}}<!-- {{nItem.title}} --></li>
					</ul>
				</li>
			</ul>
			<div class="left_menu_show" @click="lefttoggle()">
		</div>
		</div>
	</article>
</template>
<script>
	import data from ".././GameData/left_nav.js"
	export default{
		data(){
			return{
				data:data,
				isOpen: true,
				openId:0,
				backshow: false,
				leftopen:false
			}
		},
		methods:{
			toggle(index){
				if(this.isOpen && this.openId == index){
					this.openId = -1;
					this.isOpen = false;
					return false;
				}
				if(index) {
					this.backshow = true;
				}
				this.openId = index;
				this.isOpen = true;
				this.leftopen = false;
			},
			goback(){
				this.backshow = false;

			},
			lefttoggle(){
				if(this.leftopen){
					this.leftopen = false;
					this.openId = -1;
					return false;
				}
				this.leftopen = true;
			}
		
		}
	}
</script>