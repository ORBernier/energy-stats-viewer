<script setup lang="ts">
import type { Production } from '@/shared/interfaces/production';
import { borders, colors } from '@/shared/utils/chartColors';
import { labels } from '@/shared/utils/chartLabels';
import { useDataStore } from '@/stores/data';
import { Doughnut } from 'vue-chartjs';

const store = useDataStore();

const chartData = (prod: Production) => {
  const data = [
    prod.hydraulic,
    prod.wind,
    prod.solar,
    prod.thermal,
    prod.other,
  ];
  return {
    labels,
    datasets: [
      {
        label: 'Energy Production Pie Chart in MegaWatts (MW)',
        data,
        backgroundColor: colors,
        borderColor: borders,
        borderWidth: 1,
      },
    ],
  };
};
</script>

<template>
  <v-row>
    <v-col cols="3" v-for="item in store.getProductionList" :key="item.date">
      <v-card class="ma-5 d-block">
        <Doughnut :data="chartData(item)" class="ma-2 pb-5"></Doughnut>
        <v-sheet class="ma-5 d-flex justify-center font-weight-bold">{{
          new Date(item.date).toLocaleString()
        }}</v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>
