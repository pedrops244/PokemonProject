<template>
  <v-app>
    <v-main class="background">
      <v-container fluid>
        <Header />

        <v-row mt-4>
          <v-col sm="12" md="6">
            <PokemonSelected
              :name="pokemonSelected?.name"
              :xp="pokemonSelected?.base_experience"
              :height="pokemonSelected?.height"
              :weight="pokemonSelected?.weight"
              :url="pokemonSelected?.sprites?.other?.dream_world.front_default"
              :ability1="pokemonSelected?.abilities ? pokemonSelected?.abilities[0]?.ability.name : '??'"
              :ability2="pokemonSelected?.abilities ? pokemonSelected?.abilities[1]?.ability.name : '??'"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="card-list rounded-xl" color="primary">
              <v-card-text>
                <v-text-field
                  v-model="searchPokemon"
                  clearable
                  density="compact"
                  variant="solo"
                  label="Search pokemons"
                  append-inner-icon="mdi-magnify"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-text>
              <v-row>
                <CardList
                  v-for="(pokemon, idx) in pokemonsFiltered"
                  :key="idx"
                  :name="pokemon.name"
                  :image="pokemon.url"
                  :url="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
                  :search="searchPokemon"
                  @click="selectPokemon(pokemon)"
                />
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

import CardList from '@/components/CardList.vue';
import Header from '@/components/Header.vue';
import PokemonSelected from '@/components/PokemonSelected.vue';

const urlBaseSvg = ref('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/');
const pokemons = ref();
const searchPokemon = ref('');
const pokemonSelected = ref();

const fetchPokemons = async () => {
  await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then((res) => {
    pokemons.value = res.data.results;
  });
};

onMounted(fetchPokemons);

const pokemonsFiltered = computed(() => {
  if (pokemons.value && searchPokemon.value) {
    return pokemons.value.filter((pokemon) => pokemon.name.toLowerCase().includes(searchPokemon.value.toLowerCase()));
  }
  return pokemons.value;
});

const selectPokemon = async (pokemon) => {
  await axios
    .get(pokemon.url)
    .then((res) => (pokemonSelected.value = res.data))
    .catch((err) => alert(err));
};
</script>

<style scoped>
.card-list {
  max-height: 75vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.background {
  background: linear-gradient(
    0deg,
    rgba(0, 41, 150, 1) 0%,
    rgba(255, 255, 255, 0.664),
    rgba(106, 196, 233, 0.9360119047619048) 100%
  );
}
@media (max-width: 768px) {
  .card-list {
    max-height: 48vh;
  }
}
</style>
