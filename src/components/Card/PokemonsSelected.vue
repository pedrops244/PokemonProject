<template>
  <v-card class="CardPokemonSelected" color="secondary" elevation="5">
    <v-img class="pt-2" :src="props.url"> </v-img>

    <v-card-title class="text-capitalize text-center">{{ props.name }}</v-card-title>
    <v-divider></v-divider>
    <v-row class="text-center">
      <v-col>
        <strong>XP: </strong>
        <span>{{ props.xp }}</span>
      </v-col>
      <v-col>
        <strong>Altura: </strong>
        <span>{{ props.height }}</span>
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
.CardPokemonSelected img {
  height: 250px;
}

@media (max-width: 768px) {
  .CardPokemonSelected {
    height: 30vh;
    width: 40%;
    margin: 0 auto 10px auto;
  }
  .CardPokemonSelected img {
    height: 100px;
  }
}
</style>
