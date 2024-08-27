<template>
    <div class="person">
        <h1>watch情况二：监视【ref】定义的【对象类型】的数据</h1>
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
let person=ref({
    name:'张三',
    age:18
})
function changeName(){
    person.value.name='李四'
}
function changeAge(){
    person.value.age=20
}
function changePerson(){
    person.value={
        name:'王五',
        age:30
    }
}
//监视，情况一，监视【ref】定义的【对象类型】数据，监视的是对象的引用地址，若想监视对象内部属性的变化，需要手动开启深度监视
watch(person,(newValue,oldValue)=>{
    console.log('watch情况二：监视【ref】定义的【对象类型】的数据',newValue,oldValue)
},{deep:true,immediate:true})

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