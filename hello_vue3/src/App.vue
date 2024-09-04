<template>
   <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
import Person from '@/components/Person.vue'
import { ref,onMounted } from 'vue';
let isShow = ref(true)
onMounted(()=>{
    console.log('App挂载完成')
})
</script>