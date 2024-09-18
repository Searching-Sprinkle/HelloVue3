<template>
  <div class="love-talk">
    <button @click="getTalk">获取一句土味情话</button>
    <ul>
        <li v-for="item in talkStore.talkList" :key="item.id">{{item.title}}</li>

    </ul>

  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import {reactive} from 'vue'
import axios from 'axios'
import {nanoid} from 'nanoid'
import {useTalkStore} from '@/store/lovetalk'
const talkStore=useTalkStore()




//方法
async function getTalk(){
//     //发请求,下面的写法是连续结构+重命名,有点秀技术的嫌疑，对新手不友好
// //    let {data:{content:title}}= await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//     //正常写法，建议这么些，可阅读性好，可维护性好
//     let result= await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//    //把请求回来的字符串包装成一个对象
//     let obj={id:nanoid(),title:result.data.content} 
//     talkList.unshift(obj)
//     console.log(obj)
}

</script> 

<style scoped>
.love-talk {
background-color: rgb(232, 74, 232);
padding: 10px;
border-radius: 10px;
box-shadow: 0 0 10px;
}
select,button{
    margin: 0 5px;
    height: 30px;
}
</style>