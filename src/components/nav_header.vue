<template>
	<article class="nav_header">
		<div v-for="navItem in navData">
			<span class="tips fl clear">{{navItem.title}}</span>
			<ul>
				<li 
					:class="{'active': item.id == seletedId}" 
					@click="select(item.id)"
					v-for="item in navItem.childs">{{item.title}}</li>
			</ul>
		</div>
		<p class="clear prompt">描述 <span class="example">范例</span> <span class="help">？</span></p>
		<div class="text-box">
			<div class="single">
				<textarea class="input_nums" style="overflow-y: hidden; outline: none;"></textarea>
				 <span class="clear-repeat">删除重复</span>
		        <span class="empty">清空</span>
				<span class="write_box_desc">
		            每一个号码之间请用一个 空格[ ]、逗号[,] 或者 分号[;] 隔开
		        </span>
		       
			</div>
		</div>
	</article>
</template>
<script>
	export default{
		props:{
			navData: Array
		},
		data(){
			return {
				seletedId: -1
			}
		},
		methods:{
			select(index){
				this.seletedId = index;
			}
		}
	}
</script>

