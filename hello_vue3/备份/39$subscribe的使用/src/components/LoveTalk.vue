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
import { storeToRefs } from 'pinia';


const talkStore=useTalkStore()
const{talkList} = storeToRefs(talkStore)

talkStore.$subscribe((mutation,state)=>{
  console.log('talkStore里保存的数据发生了变化',mutation,state)
  localStorage.setItem('talkList',JSON.stringify(state.talkList))
})

//方法
function getTalk(){
  talkStore.getATalk()
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