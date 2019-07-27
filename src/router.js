import Vue from 'vue'
import Router from 'vue-router'
import c_Wode from './views/c_wode'
import c_Huiyuan from './views/c_huiyuan'
import c_Shoucang from './views/c_shoucang'
import c_Dibulan from './views/c_dibulan'
import c_Xiangce from './views/c_xiangce'
import c_Dingdan from './views/c_dingdan'
import c_Daishouhuo from './views/c_daishouhuo'
import c_Youhuijuan from './views/c_youhuijuan'
import c_Guige from './views/c_guige'
import c_Guanzhu from './views/c_guanzhu'
import c_Qingjie from './views/c_qingjie'
import c_Liaotian from './views/c_liaotian'
import c_Pingjia from './views/c_pingjia'
import c_Xiangqing from './views/c_xiangqing'
import c_Bibei from './views/c_bibei'
import c_Dizhibianji from './views/c_dizhibianji'
import c_Jiemian from './views/c_jiemian'
import c_Xiaoxi from './views/c_xiaoxi'
import ShoppingCart from './views/c_ShoppingCart'

import Jin from './views/Jinnang.vue'

import Shipu from './components/Shipu.vue'
import Baike from './components/Baike.vue'
import Wenda from './components/Wenda.vue'
import Index from './views/Index.vue'
import Neng from './components/Neng.vue'
import Ying from './components/Ying.vue'
import Shou from './components/Shou.vue'
import Jiuniang from './components/Jiuniang.vue'

import Home from './views/Home'

import Login from './views/Login'
import Register from './views/Register'
import Logreg from './views/Logreg'
import Life from './views/Life'
import Community from './views/Community'
import Shopping from './views/Shopping'
import List from './views/List'
import All from './views/All'
import Listdetail from './views/Listdetail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/c_dibulan',
            name: 'c_dibulan',
            component: c_Dibulan,
            children: [{
                    path: '/c_wode',
                    name: 'c_wode',
                    component: c_Wode
                }, {
                    path: '/c_guanzhu',
                    name: 'c_guanzhu',
                    component: c_Guanzhu
                }, {
                    path: '/c_xiaoxi',
                    name: 'c_xiaoxi',
                    component: c_Xiaoxi
                }, {
                    path: '/Life',
                    name: 'Life',
                    component: Life
                }, {
                    path: '/index',
                    name: 'index',
                    component: Index,

                },
                {
                    path: '/Home',
                    name: 'Home',
                    // redirect: "/Home",
                    component: function() {
                        return import ('./views/Home.vue')
                    }
                },
            ]
        },
        {
            path: '/c_huiyuan',
            name: 'c_huiyuan',
            component: c_Huiyuan
        }, {
            path: '/c_shoucang',
            name: 'c_shoucang',
            component: c_Shoucang
        }, {
            path: '/c_xiangce',
            name: 'c_xiangce',
            component: c_Xiangce
        }, {
            path: '/c_dingdan',
            name: 'c_dingdan',
            component: c_Dingdan
        }, {
            path: '/c_daishouhuo',
            name: 'c_daishouhuo',
            component: c_Daishouhuo
        }, {
            path: '/c_youhuijuan',
            name: 'c_youhuijuan',
            component: c_Youhuijuan
        }, {
            path: '/c_dizhibianji',
            name: 'c_dizhibianji',
            component: c_Dizhibianji
        }, {
            path: '/c_xiangqing/:id',
            name: 'c_xiangqing',
            //redirect: "/xiangqing",
            component: c_Xiangqing
        }, {
            path: '/c_guige/:id',
            name: 'c_guige',
            component: c_Guige
        }, {
            path: '/c_jiemian/:id',
            name: 'c_jiemian',
            component: c_Jiemian
        }, {
            path: '/c_pingjia/:id',
            name: 'c_pingjia',
            component: c_Pingjia
        }, {
            path: '/c_liaotian/:id',
            name: 'c_liaotian',
            component: c_Liaotian
        }, {
            path: '/c_qingjie',
            name: 'c_qingjie',
            component: c_Qingjie
        }, {
            path: '/c_bibei',
            name: 'c_bibei',
            component: c_Bibei
        },
        {
            path: '/c_ShoppingCart',
            name: 'c_ShoppingCart',
            component: ShoppingCart
        },
        // {
        //     path: '/',
        //     name: 'Home',
        //     component: Home
        // },
        {
            path: '/Dcim',
            name: 'dcim',
            component: function() {
                return import ('./views/Dcim.vue')
            }
        },
        {
            path: '/BabyCare',
            name: 'babycare',
            component: function() {
                return import ('./views/BabyCare.vue')
            }
        },
        {
            path: '/Achievement',
            name: 'achievement',
            component: function() {
                return import ('./views/Achievement.vue')
            }
        },
        {
            path: '/MissionFriends',
            name: 'missionfriends',
            component: function() {
                return import ('./views/MissionFriends.vue')
            }
        },
        {
            path: '/ToPicture',
            name: 'topicture',
            component: function() {
                return import ('./views/ToPicture.vue')
            }
        },
        {
            path: '/AllPicture',
            name: 'allpicture',
            component: function() {
                return import ('./views/AllPicture.vue')
            }
        },
        {
            path: '/logreg',
            component: Logreg
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isLogin: true
            },
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: "/community",
            component: Community
        }, {
            path: '/shopping',
            component: Shopping
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/all',
            component: All
        }, {
            path: '/listdetail',
            component: Listdetail
        },
        {
            path: '/shipu',
            name: 'Shipu',
            component: Shipu,
        }, {
            path: '/baike',
            name: 'Baike',
            component: Baike,
        }, {
            path: '/wenda',
            name: 'Wenda',
            component: Wenda,
        },
        {
            path: '/nengchi',

            component: Neng,
        },
        {
            path: '/yingyang',

            component: Ying,
        },
        {
            path: '/shoucang',

            component: Shou,
        },
        {
            path: '/jiuniang',
            component: Jiuniang,
        },




    ]
})