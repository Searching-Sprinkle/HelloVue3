<template>
    <div class="person">
        <h1>watch情况四：</h1>
        <h2>名字：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeCar1">换汽车1</button>
        <button @click="changeCar2">换汽车2</button>
        <button @click="changeCar">汽车全换</button>
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
    age:18,
    car:{
        c1:'宝马',
        c2:'奔驰'
    }
})
function changeName(){
    person.name='李四'
}
function changeAge(){
    person.age=20
}
function changeCar1(){
    person.car.c1='奥迪'
}
function changeCar2(){
    person.car.c2='奥拓'
}
//reactive不能直接改，要用Object.assign
function changeCar(){
    person.car={
        c1:'大众',
        c2:'丰田'
    }
}
/*监视，情况四，监视ref或者reactive定义的【对象类型】数据中的某个属性，要注意:
    1.若该属性值不是【对象类型】，需要写成箭头函数，返回该属性值
    2.若该属性是【对象类型】，可以直接写，也可以写箭头函数，建议写成箭头函数，返回该属性值
*/

watch(()=>{return person.name},(newValue,oldValue)=>{
    console.log('person.name变化了',newValue,oldValue)
})
/*监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
*/ 
watch(()=>{return person.car},(newValue,oldValue)=>{
    console.log('person.car变化了',newValue,oldValue)
},{deep:true})
//结论：监视的要是对象里的属性，最好写函数式，要看响应式对象中的某个属性，且该属性是对象类型的，要手动开启深度监视
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