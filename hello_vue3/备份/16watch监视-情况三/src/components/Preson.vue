<template>
    <div class="person">
        <h1>watch情况三：监视【reactiva】定义的【对象类型】的数据，且默认开启深度监视</h1>
        <h2>名字：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">换个人</button>

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
let person=reactive({
    name:'张三',
    age:18
})
function changeName(){
    person.name='李四'
}
function changeAge(){
    person.age=20
}
//reactive不能直接改，要用Object.assign
function changePerson(){
    Object.assign(person,{
        name:'王五',
        age:30
    })
}
//监视，情况三，监视【reactive】定义的【对象类型】数据，默认开启深度监视，并且关不了
watch(person,(newValue,oldValue)=>{
    console.log('watch情况三：监视【reactive】定义的【对象类型】的数据',newValue,oldValue)
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