<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        
        
    </div>    
</template>
<script lang="ts">
 //JS或Ts代码
 export default {
    name: 'Preson',
    data(){
        return {
            name: '张三',
            age: 18,
            tel: '12345678901'
        }
    },
    methods: {
        showTel(){
            alert(this.tel)
        },
        changeName(){
            this.name = '李四'
        },
        changeAge(){
            this.age += 1
        }
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