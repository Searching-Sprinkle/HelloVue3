<template>
    <div class="person">
        <h2>当前求和为:{{ sum }}</h2>
        <button @click="changeSum">sum+1</button>
    </div> 
</template>

<!-- <script  lang="ts">
 //JS或Ts代码
 //这里是一个组件，自定义组件名
 export default {
    name: 'Preson',
}
</script> -->

<script setup lang="ts" name="Presonal">
import { reactive,toRefs,ref,computed,watch } from 'vue'

let sum = ref(0)

function changeSum() {
    sum.value++
}

//监视
const stopwatch = watch(sum,(newValue,oldValue)=>{
    console.log('watch',newValue,oldValue)
    if(newValue >= 10) {
        stopwatch()
    }
})
</script>

<style scoped>
    /* css样式 */
    .person {
        background-color: rgb(255, 221, 127);
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 10px;
    }
</style>