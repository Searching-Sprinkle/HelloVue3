//创建一个路由，并暴露出去

//第一步：引入createRouter
import { createRouter,createWebHashHistory } from 'vue-router'
//引入可能用到的组件
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Login from '@/components/News.vue'
import News from '@/components/News.vue'

//第二步：创建路由器
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home', 
            component:Home,
        },
        {
            path: '/about', 
            component:About,
        },
        {
            path: '/news', 
            component:News,
        },
        
    ]
})

//交出去
export default router