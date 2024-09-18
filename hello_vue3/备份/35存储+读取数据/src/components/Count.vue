<template>
    <div class="count">
        <h2>
            当前求和为{{ countStore.sum }}
        </h2>
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

const countStore = useCountStore()

let n = ref(1)//用户选择的数字
function add(){

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