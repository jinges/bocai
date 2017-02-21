<template>
	<article class="content">
		<game-result></game-result>
		<div class="left_pannel fl">
			<nav-tab :tab-data="gameData" @gametype="checkGame"></nav-tab>
			<nav-header :nav-data="gameType" @selctedtemp="selectTemp"></nav-header>
			<five-line @selected-result="getResult"></five-line>
			<section class="bar clear">
				<div class="left">
					<span class="fl">共0注</span>
					<div class="count fl">
						<i class="element" @click="minus">-</i>
						<input type="text"  class="element" v-model="count">
						<i class="element" @clcik="plus">+</i>
					</div>
					<div class="money fl">
						<i class="black-circle" 
							v-for="(item, index) in currency"
							:class="{'active': selectCurrency == index}"
							@click="unit=item[1]">{{item[0]}}</i>
						<span>金额：{{count * unit}}元</span>
					</div>
				</div>
				<div class="btns">
					<span v-for="(item, index) in ['添加', '加倍', '机选']"
						:class="{'active': active == index}"
						@click="activeFun(index)"
						 >{{item}}</span>
				</div>
			</section>
			<selected-view></selected-view>
		</div>
	</article>
</template>
<script>
	import GameResult from './../components/game_result.vue';
	import NavTab from './../components/nav_tab.vue';
	import NavHeader from './../components/nav_header.vue';
	import FiveLine from './../components/games/fiveline.vue'
	import SelectedView from './../components/SelectedView.vue';


	import shishicai from './../GameData/shishicai'

	export default{
		components:{
			GameResult,
			NavTab,
			NavHeader,
			SelectedView,
			FiveLine
		},
		data(){
			return {
				gameType: Array,
				gameData: Object,
				gameIndex: Number,
				active: 0,
				flag: -1,
				count: 1,
				result: Array,
				unit: 1,
				currency: [['元', 1], ['角', 0.1], ['分', 0.01], ['厘',0.001]],
				selectCurrency: 0
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
			},
			selectTemp(arr){
				console.log(arr);
			},
			activeFun(index){
				let that = this;
				this.active = index;
				setTimeout(()=>{
					that.active = 0;
				}, 200);
				if(index==0) {

				} else if(index == 1) {
					this.double();
				} else if(index ==2) {
					
				}
			},
			getResult(arr){
				this.result = arr;
			},
			plus(){
				this.count+=1;
			},
			minus(){
				this.count=this.count>1?--this.count:1;
			},
			double(){
				this.count*=2;
			}
		}
	}
</script>