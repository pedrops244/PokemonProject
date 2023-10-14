<template>
  <v-col cols="4" md="6" xl="3">
    <v-card style="cursor: pointer" flat class="p-2 border-b rounded-xl mb-3" color="secondary" elevation="5">
      <v-img class="align-end text-white" :src="props.url" height="80px"> </v-img>
      <v-card-title class="text-capitalize text-center">{{ props.name }}</v-card-title>
    </v-card>
  </v-col>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'Pokemon',
  },

  url: {
    type: String,
    default: '',
  },
});
</script>
