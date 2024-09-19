//这就是一个仓库，和talklove相关的都能存
import { defineStore } from "pinia";
import axios from "axios";
import  {nanoid} from 'nanoid'
export const useTalkStore = defineStore('talk', {
    actions: {
        async getATalk() {
            //发请求,下面的写法是连续结构+重命名,有点秀技术的嫌疑，对新手不友好
            //let {data:{content:title}}= await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            //正常写法，建议这么些，可阅读性好，可维护性好
            let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            //把请求回来的字符串包装成一个对象
            let obj = { id: nanoid(), title: result.data.content }
            this.talkList.unshift(obj)
            console.log(obj)
        }
    },
    //真正存数据的地方
    state() {
        return {
            talkList: [
                {
                    id: 1,
                    title: '今天你有点怪，哪里怪？怪好看的！'
                }
                ,
                {
                    id: 2,
                    title: '你知道我喜欢喝什么酒吗？啤酒，白酒。我喜欢你和我的天长地久。'
                },
                {
                    id: 3,
                    title: '请问附近有飞机场吗？，没有，那为什么一看见你我的心就飞起来了。'
                }
            ]
        }
    }
});