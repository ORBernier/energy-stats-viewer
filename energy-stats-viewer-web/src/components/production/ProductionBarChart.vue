<script setup lang="ts">
import { borders, colors } from '@/shared/utils/chartColors';
import { labels } from '@/shared/utils/chartLabels';
import { useDataStore } from '@/stores/data';
import { Bar } from 'vue-chartjs';
import ProductionDetails from './ProductionDetails.vue';

const store = useDataStore();

const totalProduction = store.getTotalProduction;

const prodTotal = store.getTotalProductionByTypes;

const totalHydraulic = prodTotal[0];
const totalWind = prodTotal[1];
const totalSolar = prodTotal[2];
const totalThermal = prodTotal[3];
const totalOthers = prodTotal[4];

const chartData = {
  labels,
  datasets: [
    {
      label: 'Total Energy Production Bar Chart in MegaWatts (MW)',
      data: store.getTotalProductionByTypes,
      backgroundColor: colors,
      borderColor: borders,
      borderWidth: 2,
      minBarLength: 5,
    },
  ],
};
</script>

<template>
  <v-card class="ma-5">
    <Bar :data="chartData" class="ma-5 pb-15" />
    <ProductionDetails
      :total="totalProduction"
      :hydraulic="totalHydraulic"
      :wind="totalWind"
      :solar="totalSolar"
      :thermal="totalThermal"
      :others="totalOthers" />
  </v-card>
</template>
