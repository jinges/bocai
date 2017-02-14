import Vue from 'vue/dist/vue.js'
export default (text)=>{
	let template = 
		'<div class="toast" id="toast" v-show="show">'+
	    '    <p class="toast-wrapper">{{text}}</p>'+
	    '</div>';

	let Toast= Vue.extend({
		template: template
	})

	let toast = new Toast({
		data: {
			show: true,
			text: text
		}
	});
	
	toast.$mount('body');

	// setTimeout(()=>{
	// 	toast.show = false;
	// }, 1400)
}