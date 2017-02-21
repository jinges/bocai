import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import Vuex from 'vue'


import routes from './router'
import Directive from './directive'
import {os} from './unit/os'
import SEO from './unit/seo'

import * as Filters from './filter'

import './assets/sass/style.scss'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Vuex)

Object.keys(Directive).forEach(function(k){
	Vue.directive(k, Directive[k]);
})

Object.keys(Filters).forEach(k=>{
	Vue.filter(k, Filters[k]);
})

let router = new VueRouter({
  // mode: 'history',
	routes: routes ,
	scrollBehavior: function (to, from, savedPosition) {
	    return savedPosition || { x: 0, y: 0 }
	}
})


// router.beforeEach((to, from, next ) =>{
//     var body = document.getElementsByTagName('body')[0];
//     document.title = SEO[to.name] || to.name;
//     var iframe = document.createElement("iframe");
//     iframe.setAttribute("src", "#!/favicon.ico");
//     iframe.style.display = 'none';
//     iframe.addEventListener('load', function() {
//         setTimeout(function() {
//             // iframe.removeEventListener('load');
//             document.body.removeChild(iframe);
//         }, 0);
//     });
//     document.body.appendChild(iframe);
//     next();
// })

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')