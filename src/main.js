import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './data/userinfo'
import {
    Lazyload
} from 'vant';
import './data/prolist'
import 'lib-flexible/flexible'
import BaiduMap from 'vue-baidu-map';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import './libs/rem.js';
import waterfall from 'vue-waterfall2'
import axios from 'axios'
import qs from 'qs'
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(waterfall)
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'vvXPtvFRauaH95HtunWjBiLZPCasV3Yy'
});
Vue.prototype.$http = axios
Vue.use(VueAwesomeSwiper);
Vue.use(qs)
require('./mock');

Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')