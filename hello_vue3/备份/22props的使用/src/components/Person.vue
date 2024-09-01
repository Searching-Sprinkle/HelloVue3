<template>
    <div class="person">
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