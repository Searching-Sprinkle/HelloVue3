<template>
    <div class="person">
    <h1>你好</h1>
    <h2>{{ person.age }}</h2>
    </div> 
</template>

<script setup lang="ts" name="Person" >
import { type PersonInter,type Persons } from '@/types/index.ts';

let person:PersonInter = {
    age:18,
    id:'123',
    name:'张三',
    sex:'男'
}

let personList:Persons = [
    {
        age:18,
        id:'123',
        name:'张三',
        sex:'男'
    },
    {
        age:19,
        id:'123',
        name:'李四',
        sex:'女'
    },
    {
        age:20,
        id:'123',
        name:'王五',
        sex:'男'
    }
]
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