<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true);
const rail = ref(true);
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        class="bg-teal"
        permanent
        @click="rail = false">
        <div>
          <v-list-item
            prepend-icon="mdi-vuetify"
            title="App powered by Vue"
            nav>
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"></v-btn>
            </template>
          </v-list-item>
        </div>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard-variant"
            title="Dashboard"
            value="home">
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-factory"
            title="Production"
            value="account"></v-list-item>
          <v-list-item
            prepend-icon="mdi-home-lightning-bolt"
            title="Demand"
            value="users"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
