<template>
    <div class="person">
        <h2>当前求和为：{{ sum }},放大10倍后{{ bigSum }}</h2>
        <button @click="changeSum">点我sum+1</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index"> 
        <br>
        <button @click="getDog">狗狗+1</button>
    </div>

</template>
<script lang="ts" setup name="Person">
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

const {sum,changeSum,bigSum} = useSum();
const {dogList,getDog} = useDog();
</script>

<style scoped>
.person{
    background-color: bisque;
    box-shadow: 50cm;
    border: 1px solid red;
    margin: 10px;
}
img{
    height: 100px;
    margin-right: 50px;
}
</style>
