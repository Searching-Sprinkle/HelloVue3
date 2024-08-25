<template>
    <div class="person">
      <h2>人名：{{ preson.name }}</h2>
      <h2>年龄：{{ preson.age }}</h2>
      <h2>性别：{{ preson.sex }}</h2>
      <button @click="changeAge">年龄+1</button>
      <button @click="changeName">改名字</button>
      <button @click="Reset">重置信息</button>
      <hr>
      <h2>人名：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
      <h2>性别：{{ sex }}</h2>
      <button @click="changetoRefsAge">年龄+1</button>
      <button @click="changetoRefsName">改名字</button>
      <button @click="ResettoRefs">重置信息</button>
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
import { reactive,toRefs } from 'vue'
let preson = reactive({
    name: '张三',
    age: 18,
    sex: '男'
})

//let {name,age,sex}=preson//解构赋值，但不是响应式的
let {name,age,sex}=toRefs(preson)//解构赋值，是响应式的
function changeAge() {
    preson.age++
}
function changeName() {
    preson.name = '李四'
}
function changetoRefsAge() {
    age.value++
}
function changetoRefsName() {
    name.value = '王五'
}
function ResettoRefs() {
    name.value = '张三'
    age.value = 18
    sex.value = '男'
}
function Reset() {
    preson.name = '张三'
    preson.age = 18
    preson.sex = '男'
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