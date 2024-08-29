<template>
    <div class="person">
        <h1>当前水位：{{ height }}</h1>
        <h1>当前水温：{{ temp }}</h1>
        <button @click="changeHeight">水位+1</button>
        <button @click="changeTemp">水温+10</button>
        
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
import { ref,watch,watchEffect } from 'vue'

let height = ref(0)
let temp = ref(10)

function changeHeight() {
    height.value += 1
}
function changeTemp() {
    temp.value += 10
}

// watch([temp, height],(value)=>{
// let [newTemp,newHeight] = value
// if(newTemp > 50) {
//     alert('水温过高')
// } else if(newHeight > 10) {
//     alert('水位过高')
// }
// })
watchEffect(()=>{
    if(temp.value > 50) {
        alert('水温过高')
    } else if(height.value > 10) {
        alert('水位过高')
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