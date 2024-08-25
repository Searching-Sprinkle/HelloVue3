<template>
    <div class="person">
        <h2>一辆{{ car.color }}色{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车的价格</button>
        <button @click="changeCar">变个reactive汽车</button>
        <button @click="reSet">重置</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="item in games" :key="item.id">
<!-- :的含义就是绑定属性，:key="item.id"的意思是把item.id的值绑定到key属性上 -->
 {{ item.name }}
            </li>
        </ul>
        <button @click="changeGmae1Name">修改第一个游戏的名字</button>
        <hr>
        <h2>一辆{{ car1.color }}色{{ car1.brand }}车，价值{{ car1.price }}万</h2>
        <button @click="changeCar1">变个ref汽车</button>
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
import { reactive,ref } from 'vue'
    //数据
    let car1 =ref({
        brand:'奔驰',
        price:100,
        color:'黑'
        })

    let car =reactive( { //reactive再次分配对象时，失去响应式的属性，用ref就没有这种烦恼
        brand:'奔驰',
        price:100,
        color:'黑'
        })
    let games =ref([
        {id:'game1',name:'黑神话'},
        {id:'game2',name:'英雄联盟'},
        {id:'game3',name:'王者荣耀'}
    ])
    function changePrice() {
        car.price += 20;
    }
    function changeGmae1Name() {
        games.value[0].name = '黑神话·悟空';
    }
    function changeCar() {
       Object.assign(car,{brand:'宝马',price:200,color:'白'})//reactive这么写能改
    }
    function changeCar1() {
        car1.value = {brand:'宝马',price:200,color:'白'}
    }
    function reSet() {
        car.price = 100;
        games.value[0].name = '黑神话';
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