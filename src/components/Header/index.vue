<template>
  <v-app-bar>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
      <v-card-text>
        <v-text-field
          v-model="search"
          density="compact"
          variant="solo"
          label="Search templates"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-card-text>
    </v-card>
  </v-app-bar>
</template>
<script setup></script>
