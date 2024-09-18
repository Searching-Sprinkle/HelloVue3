//这就是一个仓库，和talklove相关的都能存
import { defineStore } from "pinia";
export const useTalkStore = defineStore('talk',{
    //真正存数据的地方
    state(){
        return{
            talkList:[
                {
                    id:1,
                    title:'今天你有点怪，哪里怪？怪好看的！'
                }
                ,
                {
                    id:2,
                    title:'你知道我喜欢喝什么酒吗？啤酒，白酒。我喜欢你和我的天长地久。'
                },
                {
                    id:3,
                    title:'请问附近有飞机场吗？，没有，那为什么一看见你我的心就飞起来了。'
                }
            ]
        }
    }
});