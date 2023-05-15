<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>
body {
  margin-left: 56px;
  padding-left: 1rem;
  background-color: whitesmoke;
}
</style>
