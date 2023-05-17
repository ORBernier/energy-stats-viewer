<script setup lang="ts">
import ProductionCard from '@/components/production/ProductionCard.vue';
</script>

<template>
  <div class="container">
    <h1>Energy Production in Quebec Province by Type for each Date Time</h1>
    <ProductionCard />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.container h1 {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
