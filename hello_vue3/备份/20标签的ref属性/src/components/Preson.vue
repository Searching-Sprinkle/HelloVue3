<template>
    <div class="preson">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <h3>301</h3>
        <button @click="showLog" >点我输出h2的元素</button>

    </div> 
</template>

<script setup lang="ts" name="Preson" >
import { ref,watch,watchEffect } from 'vue'

let title2 = ref()

function showLog(){
    console.log(title2.value);
}

</script>

<style scoped>
    /* css样式 */
    .preson {
        background-color: rgb(255, 221, 127);
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 10px;
    }
</style>