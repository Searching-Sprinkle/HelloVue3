<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>联系方式：{{ tel }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        
        
    </div>    
</template>
<script lang="ts">
 //JS或Ts代码
 export default {
    name: 'Preson',
    setup() {//setup中无法使用this，Vue3中已经弱化this
        //vue2能读vue3，但vue3不能读vue2
        //数据
        let name = '张三'//非响应式数据
        let age = 18//非响应式数据
        let tel = '123456789'//非响应式数据

        //方法
        function changeName() {
            name = '李四'
        } 
        function changeAge() {
            age += 1
        }
        function showTel() {
            alert(tel)
        }
        //将方法、数据交出去，模板中才能使用
        return { name, age, tel, changeName, changeAge, showTel }
        //return()=>'FUCKYouMan'

    }
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