<script setup lang="ts">
import DemandTable from '../components/demand/DemandTable.vue';
import DemandLineChart from '@/components/demand/DemandLineChart.vue';
</script>

<template>
  <div class="container">
    <h1>Total Energy Demand in Quebec Province</h1>
    <DemandLineChart />
    <DemandTable />
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
