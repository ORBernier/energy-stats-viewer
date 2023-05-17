<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { useDataStore } from './stores/data';
import {
  fetchDemandData,
  fetchProductionData,
} from './shared/services/dataService';

const dataStore = useDataStore();

fetchDemandData().then((data) => {
  dataStore.$patch({
    demandList: data,
  });
});

fetchProductionData().then((data) => {
  dataStore.$patch({
    productionList: data,
  });
});
</script>

<template>
  <header>
    <NavBar />
  </header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 56px;
  padding-left: 1rem;
  background-color: whitesmoke;
}
</style>
