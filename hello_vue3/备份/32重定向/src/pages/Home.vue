<template>
  <!-- 架构 -->
    <div class="home">
      <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div>
  </template>
  

  <script setup lang="ts" name="Home">
  // 脚本
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  onMounted(() => {
    setTimeout(() => {
      router.push('/news')
    }, 3000)
  })
  
  </script>
  
  <style scoped>
  /* 样式 */
    .home {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  </style>