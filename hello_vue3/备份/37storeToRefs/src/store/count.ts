//这就是一个仓库，和count相关的都能存
import { defineStore } from "pinia";
export const useCountStore = defineStore('count',{
    //里面放置的是一个一个的动作函数，用于相应组件中的动作
    actions:{
        increment(value:number){
            this.sum+=value
            // console.log('increment被调用了',value)
        },
        decrement(value:number){
            this.sum-=value
            // console.log('decrement被调用了',value)
        },

    },

    //真正存数据的地方
    state(){
        return{
            sum:6,
            school:'河北省秦皇岛市海港区',
            name:'赵小明'
        }
    }
});