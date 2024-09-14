//创建一个路由，并暴露出去

//第一步：引入createRouter
import { createRouter,createWebHashHistory } from 'vue-router'
//引入可能用到的组件
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Login from '@/pages/News.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'

//第二步：创建路由器
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'home',
            path: '/home', 
            component:Home,
        },
        {
            name: 'about',
            //路由地址
            path: '/about', 
            component:About,
        },
        {
            name: 'news',
            //路由地址
            path: '/news', 
            component:News,
            children:[
                {
                    name:'detail',
                    path:'detail/:id?/:title?/:content?',
                    component:Detail
                }
            ]
        },
        
    ]
})

//交出去
export default router