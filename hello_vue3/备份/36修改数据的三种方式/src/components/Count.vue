<template>
    <div class="count">
        <h2>
            当前求和为{{ countStore.sum }}
        </h2>
        <h3>
            地址：{{ countStore.school }},姓名：{{ countStore.name }}
        </h3>
        <select v-model.number
        ="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="sub">-</button>

    </div>
  
</template>

<script setup lang="ts" name="Count">  
import {computed,ref} from 'vue'
import {useCountStore} from '@/store/count'

//countStore里面的数据
const countStore = useCountStore()

//数据
let n = ref(1)//用户选择的数字
function add(){

    //第一种方法：直接修改
    // countStore.sum +=n.value

    //第二种方法：补丁式修改
    // countStore.$patch({
    //     sum:countStore.sum+n.value,
    //     school:'尚硅谷',
    //     name:'Lzz'
    // })

    //第三种方法：动作修改
    countStore.increment(n.value)
}
function sub(){

}

</script>

<style scoped> 
.count {
background-color: skyblue;
padding: 10px;
border-radius: 10px;
box-shadow: 0 0 10px;
}
select,button{
    margin: 0 5px;
    height: 30px;
}

</style>