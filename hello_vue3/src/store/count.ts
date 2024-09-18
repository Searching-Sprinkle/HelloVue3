//这就是一个仓库，和count相关的都能存
import { defineStore } from "pinia";
export const useCountStore = defineStore('count',{
    //真正存数据的地方
    state(){
        return{
            sum:6
        }
    }
});