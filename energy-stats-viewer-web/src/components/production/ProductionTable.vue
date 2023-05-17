<script setup lang="ts">
import { useDataStore } from '@/stores/data';

const store = useDataStore();

const headerClasses = 'text-center text-h4 font-weight-bold';
</script>

<template>
  <v-card class="ma-5 text-center">
    <h1 class="ma-5">
      Data Table of the Energy Production in Quebec Province by Type in
      MegaWatts (MW)
    </h1>
    <v-divider />
    <v-table class="font-weight-bold">
      <thead>
        <tr>
          <th :class="headerClasses">Date Time</th>
          <th :class="headerClasses">Hydraulic</th>
          <th :class="headerClasses">Wind</th>
          <th :class="headerClasses">Solar</th>
          <th :class="headerClasses">Thermal</th>
          <th :class="headerClasses">Others</th>
          <th :class="headerClasses">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in store.getProductionList" :key="item.date">
          <td>{{ new Date(item.date).toLocaleString() }}</td>
          <td>{{ item.hydraulic }}</td>
          <td>{{ item.wind }}</td>
          <td>{{ item.solar }}</td>
          <td>{{ item.thermal || 0 }}</td>
          <td>{{ item.other }}</td>
          <td>{{ item.total }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
