<script setup lang="ts">
import { useDataStore } from '@/stores/data';
import { Line } from 'vue-chartjs';

const store = useDataStore();

const chartData = {
  labels: store.getDemandDates,
  datasets: [
    {
      label: 'Energy total demand line chart in MegasWatts (MW)',
      data: store.getTotalDemandByDate,
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
