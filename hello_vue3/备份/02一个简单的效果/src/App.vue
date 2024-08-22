
<template>
    <!-- HTML -->
    <div class="app">
        <h1>hello</h1>
        <Preson></Preson>
    </div>
</template>

<script lang="ts">
 //JS或Ts代码
 import Preson from './components/Preson.vue'
 export default {
    name: 'App',
    components: {//注册组件
        Preson
    }
}
</script>
<style scoped>
    /* css样式 */
    .app {
        background-color: aquamarine;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 10px;
    }
</style>