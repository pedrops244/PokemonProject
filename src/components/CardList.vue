<template>
  <v-col cols="6" lg="3" md="4">
    <v-card class="rounded-xl mx-1 mb-2 cardListPokemon" color="secondary" elevation="5">
      <v-img class="img mt-3 mx-3" style="cursor: pointer" :src="props.url" height="90px"> </v-img>
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

<style scoped>
.cardListPokemon:hover {
  background: rgb(72, 63, 251);
  background: radial-gradient(circle, rgba(72, 63, 251, 0.6) 0%, rgba(70, 252, 244, 0.4) 100%);
}
.img :hover {
  padding: 0.1rem;
}
</style>
