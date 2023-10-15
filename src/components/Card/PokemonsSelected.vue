<template>
  <v-card class="CardPokemonSelected rounded-xl" color="purple-darken-2" elevation="5">
    <v-img v-if="props.name" class="img mt-5" :src="props.url" />
    <v-img v-else class="img mt-5" src="../../assets/logo.svg" />

    <v-card-title class="text-capitalize text-center">{{ props.name }}</v-card-title>
    <v-divider></v-divider>
    <v-row class="table text-center mt-5 text-capitalize">
      <v-col cols="4">
        <strong>XP: </strong>
        <span>{{ props.xp }}</span>
      </v-col>
      <v-col cols="4">
        <strong>Altura: </strong>
        <span>{{ props.height }}</span>
      </v-col>
      <v-col cols="4">
        <strong>Peso: </strong>
        <span>{{ props.weight }}</span>
      </v-col>
      <v-col cols="6">
        <strong>Habilidade 1: </strong>
        <span>{{ props.ability1 }}</span>
      </v-col>
      <v-col cols="6">
        <strong>Habilidade 2: </strong>
        <span>{{ props.ability2 }}</span>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'Pokemon',
  },

  xp: {
    type: Number,
    default: 0,
  },

  height: {
    type: Number,
    default: 0,
  },

  weight: {
    type: Number,
    default: 0,
  },

  ability1: {
    type: String,
    default: '',
  },

  ability2: {
    type: String,
    default: '',
  },

  url: {
    type: String,
    default: 'https://img.pokemondb.net/artwork/vector/gengar-mega.png',
  },
});
</script>
<style scoped>
.CardPokemonSelected {
  height: 75vh;
}
.img {
  height: 300px;
}

@media (max-width: 958px) {
  .CardPokemonSelected {
    height: 33vh;
    width: 100%;
  }
  .img {
    height: 100px;
  }
}
</style>
