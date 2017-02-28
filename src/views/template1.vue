<template>
	<article class="game_content">
		<game-result></game-result>
		<section class="content fl">
			<div class="clean left_pannel fl">
				<nav-tab :tab-data="gameData" @gametype="checkGame"></nav-tab>
				<nav-header :nav-data="gameType" @selctedtemp="selectTemp"></nav-header>
				<component :is="currentView" :obj="obj" @selected="getResult"></component>
				<article class="resultView">
					<section class="bar clear">
						<div class="left">
							<span class="fl">共{{count}}注</span>
							<div class="times fl">
								<i class="element" @click="minus">-</i>
								<input type="text"  class="element" v-model="times">
								<i class="element" @click="plus">+</i>
							</div>
							<div class="money fl">
								<i class="black-circle" 
									v-for="(item, index) in currency"
									:class="{'active': selectCurrency == index}"
									@click="unit=item[1];selectCurrency=index;">{{item[0]}}</i>
								<span>金额：{{times * unit * count}}元</span>
							</div>
						</div>
						<div class="btns">
							<span v-for="(item, index) in ['添加', '加倍', '机选']"
								:class="{'active': active == index}"
								@click="activeFun(index)"
								 >{{item}}</span>
						</div>
					</section>
					<section class="viewNum">
						<ul>
							<li  v-for="item in selectedData">
								<span>{{item.title}}</span>
								<span>{{item.nums}}</span>
								<span>{{item.count}}</span>
								<span>{{item.times}}</span>
								<span>{{item.money}}</span>
							</li>
						</ul>
					</section>
				</article>
			</div>
			<right-slider class="clean right_pannel fl"></right-slider>
		</section>
		<p class="fl bottom_pannel"></p>
	</article>
</template>
<script>
	import GameResult from './../components/game_result.vue';
	import NavTab from './../components/nav_tab.vue';
	import NavHeader from './../components/nav_header.vue';
	import OneLine from './../components/games/oneline.vue'
	import TwoLine from './../components/games/twoline.vue'
	import ThreeLine from './../components/games/threeline.vue'
	import FourLine from './../components/games/fourline.vue'
	import FiveLine from './../components/games/fiveline.vue'
	import rightSlider from './../components/right_slider.vue';


	import {fushi}  from './../GameRules'
	import shishicai from './../GameData/shishicai'

	export default{
		components:{
			GameResult,
			NavTab,
			NavHeader,
			rightSlider,
			OneLine,
			TwoLine,
			ThreeLine,
			FourLine,
			FiveLine
		},
		data(){
			return {
				gameType: Array,
				gameData: Object,
				gameIndex: Number,
				active: 0,
				flag: -1,
				times: 1,
				count: 0,
				result: Object,
				unit: 1,
				currency: [['元', 1], ['角', 0.1], ['分', 0.01], ['厘',0.001]],
				selectCurrency: 0,
				currentView: '',
				cleanSelecter: false,
				obj: Object,
				selectedData: []
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
				this.cleanSelecter = true;
			},
			cleanData(){
				this.count = 0;
				this.times = 1;
				this.unit = 1;
			},
			selectTemp(item){
				var view = '';
				
				switch(item.type) {
					case 's1':
						view = 'FiveLine';
						break;
					case 's2':
						view = 'FourLine';
						break;
					case 's3':
						view = 'ThreeLine';
						break;
					case 's4':
						view = 'TwoLine';
						break;
					case 's5':
						view = 'OneLine';
						break;
					case 's6':
						view = 'FiveLine';
						break;
					case 's7':
						view = 'FiveLine';
						break;
				}
				this.currentView = view;
				this.obj.labText = item.title;
				this.obj.nums = 10;
				this.result.title = item.title;
				this.cleanData();
			},
			activeFun(index){
				let that = this;
				this.active = index;
				setTimeout(()=>{
					that.active = 0;
				}, 200);
				if(index==0) {
					this.setData();
					this.selectedData.push(this.result);
					this.unit = 1;
					this.times = 1;
					this.count = 0;
					this.setData();
				} else if(index == 1) {
					this.double();
				} else if(index ==2) {
					
				}
			},
			getResult(arr){
				this.count = fushi(arr);
				this.result.nums = arr;
			},
			plus(){
				this.times=this.times*1 + 1;
			},
			minus(){
				this.times=this.times>1?--this.times:1;
			},
			double(){
				this.times*=2;
			},
			setData(){
				this.result.unit = this.unit;
				this.result.count = this.count;
				this.result.times = this.times;
				this.result.money = this.unit * this.count * this.times;
			}
		}
	}
</script>