<template>
	<article class="nav_tab">
		<ul class="tabtitle">
			<li v-for="navItem in navData">{{navItem.name}}</li>
		</ul>
	</article>
</template>
<script>
export default{
	data(){
		return{
			navData:[
				{
					name: '五星',
					id: '1'
				},
				{
					name: '四星',
					id: '2'
				},
				{
					name: '前三',
					id: '3'
				},
				{
					name: '中三',
					id: '4'
				},
				{
					name: '后三',
					id: '5'
				},
				{
					name: '前二',
					id: '6'
				},
				{
					name: '后二',
					id: '7'
				},
				{
					name: '定位胆',
					id: '8'
				},
				{
					name: '不定位',
					id: '9'
				},
				{
					name: '大小单双',
					id: '10'
				},
				{
					name: '龙虎斗',
					id: '11'
				},
				{
					name: '任选玩法',
					id: '12'
				},
			]
		}
	}
}
</script>

