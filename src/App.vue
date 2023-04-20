<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="p-5 flex justify-end bg-blue-500 text-white font-bold">
        <RouterLink to="/" class="m-2 mr-8">Home</RouterLink>
        <RouterLink to="/about" class="m-2 mr-8">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
