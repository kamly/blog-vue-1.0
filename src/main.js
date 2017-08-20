// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import iView from 'iview'; // 引入iview
import 'iview/dist/styles/iview.css';    // 使用 CSS
import VueRouter from 'vue-router'; // 引入router
import VueResource from 'vue-resource'; // 引入resource
import Vuex from 'vuex';

import 'common/styles/index.less'; // 引入样式

import index from 'components/index/index';
import article from 'components/article/article';
import time from 'components/time/time';
import personal from 'components/personal/personal';
import tools from 'components/tools/tools';
import articleDetail from 'components/articledetail/articledetail';

// 全局注册
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

// 路由配置
const RouterConfig = [
  {path: '/index', component: index},
  {path: '/article', component: article},
  {path: '/time', component: time},
  {path: '/personal', component: personal},
  {path: '/tools', name:'tools', component: tools},
  {path: '/articleDetail/:id', name:'articleDetail', component: articleDetail},
];

const router = new VueRouter({
	routes:RouterConfig
});


/* eslint-disable no-new */
new Vue({
	render: h => h(App),
	router: router
}).$mount('#app');

router.push('/index');


