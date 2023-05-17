<script setup lang="ts">
import { useDataStore } from '@/stores/data';

const store = useDataStore();

const headerClasses = 'text-center text-h4 font-weight-bold';
</script>

<template>
  <v-card class="ma-5 text-center">
    <h1 class="ma-5">DEMAND DATA TABLE</h1>
    <v-divider />
    <v-table class="font-weight-bold">
      <thead>
        <tr>
          <th :class="headerClasses">Date Time</th>
          <th :class="headerClasses">Total Demand (in MW)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in store.getDemandList" :key="item.date">
          <td>{{ new Date(item.date).toLocaleString() }}</td>
          <td>{{ item.total }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
