<script setup lang="ts">
import { ref } from 'vue';

const rail = ref(true);
</script>

<template>
  <v-layout>
    <v-navigation-drawer expand-on-hover :rail="rail" class="bg-teal" permanent>
      <div>
        <v-list-item
          prepend-icon="mdi-vuetify"
          title="UI powered by Vuetify"
          nav>
        </v-list-item>
      </div>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard-variant"
          title="Dashboard"
          value="dashboard"
          to="/dashboard"></v-list-item>
        <v-list-item
          prepend-icon="mdi-factory"
          title="Production"
          value="productionList"
          to="/production-list"></v-list-item>
        <v-list-item
          prepend-icon="mdi-view-grid"
          title="Production Grid"
          value="productionGrid"
          to="/production-grid"></v-list-item>
        <v-list-item
          prepend-icon="mdi-home-lightning-bolt"
          title="Demand"
          value="demand"
          to="demand-list"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style scoped></style>
