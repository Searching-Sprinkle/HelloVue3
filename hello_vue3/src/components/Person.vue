<template>
    <div class="person">
<<<<<<< HEAD
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>

    </div>

</template>
<script lang="ts" setup name="Person">
import { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue'
let sum = ref(0)
function changeSum(){
    sum.value++
}

console.log('创建')
//挂载
onBeforeMount(()=>{
    console.log('挂载前')
})
//挂载完成
onMounted(()=>{
    console.log('挂载完成')
})
//更新前
onBeforeUpdate(()=>{
    console.log('更新前')
})
//更新完毕
 onUpdated(()=>{
    console.log('更新完毕')
})
//卸载前
onBeforeUnmount(()=>{
    console.log('卸载前')
})
//卸载完毕
onUnmounted(()=>{
    console.log('卸载完毕')
})
</script>

<style scoped>
.person{
    background-color: bisque;
    box-shadow: 50cm;
    border: 1px solid red;
    margin: 10px;
}
</style>
