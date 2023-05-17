<script setup lang="ts">
import DashboardLineChart from '@/components/DashboardLineChart.vue';
</script>

<template>
  <div class="container">
    <h1>DASHBOARD</h1>
    <DashboardLineChart />
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
