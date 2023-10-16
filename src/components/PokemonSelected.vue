<template>
  <v-card class="CardPokemonSelected rounded-xl" elevation="5">
    <v-img class="img mt-5" :src="props.url" />

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
        <br />
        <span>{{ props.ability1 }}</span>
      </v-col>
      <v-col cols="6">
        <strong>Habilidade 2: </strong>
        <br />
        <span>{{ props.ability2 }}</span>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'EGG!?',
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
    default: '??',
  },

  ability2: {
    type: String,
    default: '??',
  },

  url: {
    type: String,
    default: 'https://icons-for-free.com/iconfiles/png/512/Pokemon+Egg-1320568182356361824.png',
  },
});
</script>
<style scoped>
.CardPokemonSelected {
  height: 75vh;
  background: linear-gradient(0deg, rgba(244, 216, 0, 0.8) 0%, rgba(244, 0, 0, 0.8) 100%);
}

.img {
  height: 300px;
}

@media (max-width: 958px) {
  .CardPokemonSelected {
    height: 45vh;
    width: 100%;
  }
  .img {
    height: 100px;
  }
}
</style>
