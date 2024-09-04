<template>
<<<<<<< HEAD
   <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
import Person from '@/components/Person.vue'
import { ref,onMounted } from 'vue';
let isShow = ref(true)
onMounted(()=>{
    console.log('App挂载完成')
})
=======
    <!-- HTML -->
    <Person a="你好" />
</template>

<script lang="ts" setup name = "App">
 //JS或Ts代码
 import Person from '@/components/Person.vue'
import { ref, reactive} from 'vue'
import { type PersonInter,type Persons } from '@/types';
>>>>>>> 394f90a678656f1ed413341391734435bdcf4268

let person:PersonInter = {
    age:18,
    id:'123',
    name:'张三',
    sex:'男'
}

let personList:Persons = reactive<Persons>([
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
])
</script>