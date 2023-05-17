<script setup lang="ts">
const props = defineProps<{
  total: number;
  hydraulic: number;
  wind: number;
  solar: number;
  thermal: number;
  others: number;
}>();
</script>

<template>
  <div class="d-flex mb-5 align-center justify-center">
    <v-chip class="mx-5" size="x-large" label>
      Total {{ props.total.toLocaleString('fr-ca') }} MW
    </v-chip>
    <v-chip
      class="ma-2"
      size="x-large"
      prepend-icon="mdi-hydro-power"
      color="blue"
      label>
      Hydraulic {{ props.hydraulic.toLocaleString('fr-ca') }} MW ({{
        ((props.hydraulic / props.total) * 100).toFixed(2)
      }}%)
    </v-chip>
    <v-chip
      class="ma-2"
      size="x-large"
      prepend-icon="mdi-wind-power"
      color="green"
      label>
      Wind {{ props.wind.toLocaleString('fr-ca') }} MW ({{
        ((props.wind / props.total) * 100).toFixed(2)
      }}%)
    </v-chip>
    <v-chip
      class="ma-2"
      size="x-large"
      prependIcon="mdi-solar-power"
      color="rgb(255, 205, 86)"
      label>
      Solar {{ props.solar.toLocaleString('fr-ca') }} MW ({{
        ((props.solar / props.total) * 100).toFixed(2)
      }}%)
    </v-chip>
    <v-chip
      class="ma-2"
      size="x-large"
      prepend-icon="mdi-water-thermometer"
      color="orange"
      label>
      Thermal {{ props.thermal.toLocaleString('fr-ca') }} MW ({{
        ((props.thermal / props.total) * 100).toFixed(2)
      }}%)
    </v-chip>
    <v-chip class="ma-2" size="x-large" color="primary" label>
      Others {{ props.others.toLocaleString('fr-ca') }} MW ({{
        ((props.others / props.total) * 100).toFixed(2)
      }}%)
    </v-chip>
  </div>
</template>
