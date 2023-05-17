<script setup lang="ts">
import ProductionTable from '../components/production/ProductionTable.vue';
import ProductionBarChart from '@/components/production/ProductionBarChart.vue';
import ProductionPieChart from '@/components/production/ProductionPieChart.vue';
</script>

<template>
  <div class="container">
    <h1>Total Energy Production in Quebec Province</h1>
    <ProductionBarChart />
    <ProductionPieChart />
    <ProductionTable />
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
