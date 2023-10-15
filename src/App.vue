<template>
  <v-app>
    <v-main class="background">
      <v-container fluid>
        <div class="d-flex justify-center mb-3">
          <img src="/src/assets/Pokemon.svg" style="width: 300px" />
        </div>

        <v-row mt-4>
          <v-col sm="12" md="6">
            <PokemonsSelected
              :name="pokemonSelected?.name"
              :xp="pokemonSelected?.base_experience"
              :height="pokemonSelected?.height"
              :url="urlBaseSvg + pokemonSelected?.species.url.split('/')[6] + '.svg'"
              :weight="pokemonSelected?.weight"
              :ability1="pokemonSelected?.abilities[0].ability.name"
              :ability2="pokemonSelected?.abilities[1].ability.name"
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
                <Card
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
import Card from '@/components/Card';
import PokemonsSelected from '@/components/Card/PokemonsSelected';
import api from '@/services/axios';
import { reactive } from 'vue';
import { ref, onMounted, computed } from 'vue';

const searchPokemon = ref('');
const urlBaseSvg = ref('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/');
const pokemons = ref([]);
const pokemonSelected = reactive(ref());

const fetchPokemons = () =>
  api.get('/pokemon?limit=40').then((res) => {
    pokemons.value = res.data.results;
  });

onMounted(fetchPokemons);

const pokemonsFiltered = computed(() => {
  if (pokemons.value && searchPokemon.value) {
    return pokemons.value.filter((pokemon) => pokemon.name.toLowerCase().includes(searchPokemon.value.toLowerCase()));
  }
  return pokemons.value;
});

const selectPokemon = async (pokemon) => {
  try {
    await api(pokemon.url).then((res) => (pokemonSelected.value = res.data));
    console.log(pokemonSelected.value);
  } catch (e) {
    console.log(e);
  }
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
  overflow: hidden;
}
@media (max-width: 768px) {
  .card-list {
    max-height: 48vh;
  }
}
</style>
