<template>
	<article>
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