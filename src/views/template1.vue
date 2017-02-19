<template>
	<article class="content">
		<game-result></game-result>
		<div class="left_pannel fl">
			<nav-tab :tab-data="gameData" @gametype="checkGame"></nav-tab>
			<nav-header :nav-data="gameType"></nav-header>
			<selected-view></selected-view>
		</div>
	</article>
</template>
<script>
	import GameResult from './../components/game_result.vue';
	import NavTab from './../components/nav_tab.vue';
	import NavHeader from './../components/nav_header.vue';
	import SelectedView from './../components/SelectedView.vue';
	import shishicai from './../GameData/shishicai'

	export default{
		components:{
			GameResult,
			NavTab,
			NavHeader,
			SelectedView
		},
		data(){
			return {
				gameType: Array,
				gameData: Object,
				gameIndex: Number
			}
		},
		created(){
			this.$nextTick(()=>{
				this.initData();
			})
		},
		watch:{
			'$route': 'initData'
		},
		methods:{
			initData(){
				var id = this.$route.params.id;
				this.gameData = shishicai;
				this.gameType = this.gameData[1].childs;
			},
			checkGame(index){
				this.gameType = this.gameData[index].childs;
			}
		}
	}
</script>