<template>
  <v-col cols="6" lg="3" md="4">
    <v-card style="cursor: pointer" class="rounded-xl mx-1 mb-2" color="secondary" elevation="5">
      <v-img class="align-end text-white mt-3 mx-3" :src="props.url" height="90px"> </v-img>
      <v-card-text class="text-capitalize text-subtitle-2 text-center">{{ props.name }}</v-card-text>
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
