<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        <button @click="changeName">改个名字</button><br>
        全名：<span>
            {{ fullName }}<br>
        </span>
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
import { reactive,toRefs,ref,computed } from 'vue'
let firstName= ref('zhang')
let lastName= ref('san')

// //这样的fullName是一个计算属性，计算属性的值是fullName的计算结果
// let fullName=computed(()=>{
//     return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
//     //slice 截取字符串,slice(0,1)截取第一个字符
//     //toUpperCase()将字符串转换为大写
// })

//这么定义fullName是可读可写的
let fullName=computed({
    get(){
    return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
        },
    set(val){
        const [str1,str2] = val.split('-')
        firstName.value=str1
        lastName.value=str2
    }
    //slice 截取字符串,slice(0,1)截取第一个字符
    //toUpperCase()将字符串转换为大写
})
function changeName(){
    fullName.value='wang-wu'
}
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