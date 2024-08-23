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
<!-- <script  lang="ts">
 //JS或Ts代码
 //这里是一个组件，自定义组件名
 export default {
    name: 'Preson',
}
</script> -->

<script setup lang="ts" name="Presonal">
import { ref} from 'vue'
    //setup语法糖，爽！
    //组合式API
        let name = ref('张三')//非响应式数据,加上ref就是响应式了
        let age = ref(18)//非响应式数据
        let tel = '123456789'//非响应式数据
        let address = '河北'//非响应式数据

        //方法
        function changeName() {
            name.value = '李四'
        } 
        function changeAge() {
            age.value += 1
        }
        function showTel() {
            alert(tel)
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