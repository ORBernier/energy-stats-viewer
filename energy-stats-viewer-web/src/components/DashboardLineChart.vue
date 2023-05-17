<script setup lang="ts">
import { useDataStore } from '@/stores/data';
import { Line } from 'vue-chartjs';

const store = useDataStore();

const chartData = {
  labels: store.getProductionDates,
  datasets: [
    {
      label: 'Energy total demand in MegasWatts (MW)',
      data: store.getDemandByProductionDate,
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1,
    },
    {
      label: 'Energy total production in MegasWatts (MW)',
      data: store.getTotalProductionByDate,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};
</script>

<template>
  <v-card class="ma-5">
    <Line :data="chartData" class="ma-5 pb-15" />
  </v-card>
</template>
