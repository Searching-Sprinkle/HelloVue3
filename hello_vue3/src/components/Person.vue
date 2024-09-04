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
=======
<ul>
    <li v-for="(item,index) in list" :key="index">{{item.name}}--{{ item.age }}</li>
</ul>
    </div> 
</template>

<script setup lang="ts" name="Person" >
import { defineProps,withDefaults } from 'vue';
import { type PersonInter,type Persons } from '@/types';

//接受list并限制类型
// defineProps<{list:Persons}>()

//接受list+限制类型+限制必要性+指定默认值
withDefaults(defineProps<{list?:Persons,a:string}>(),{
    list:()=>[
        {
            age:21,
            id:'45456456',
            name:'康师傅',
            sex:'武装直升机'
        }
    ],
    a:'你好'
})



//只接收list
// defineProps(['a','list'])

//接受list，同时将props保存起来
// let x = defineProps(['a','list'])
>>>>>>> 394f90a678656f1ed413341391734435bdcf4268
</script>

<style scoped>
.person{
    background-color: bisque;
    box-shadow: 50cm;
    border: 1px solid red;
    margin: 10px;
}
</style>
