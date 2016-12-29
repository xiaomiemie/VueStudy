// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import App2 from './App2'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
/* eslint-disable no-new */
console.log(Vue.util.isObject({}))
		
		/* 创建路由映射  */
		var routes = [
            {
            	path: '/home',
            	component:App
            },
            {
            	path: '/about',
            	component: App2
            }
		];
		




var router = new VueRouter({routes})

new Vue({
  el: '#app',
  router,
components: {App}
})
// const app = new Vue({
//   router
// }).$mount('#app')
		/* 启动路由  */
		// var v = Vue.extend({})
		// router.start(v, '#app')