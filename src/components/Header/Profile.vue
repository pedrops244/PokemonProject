<template>
  <v-menu>
    <template #activator="{ props }">
      <v-avatar v-bind="props" style="cursor: pointer">
        <v-img
          cover
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72Uz03ApvOW6KNnQNCTlahJaeRH1ZaHaT-B5FldV9_i4mCwYmjHLQdQBci1_r35ohEps&usqp=CAU"
        ></v-img>
      </v-avatar>
    </template>

    <v-card min-width="200px">
      <v-list density="compact" :lines="false" nav>
        <v-list-item to="#" prepend-icon="mdi-account-outline">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>

        <v-list-item to="#" prepend-icon="mdi-heart-outline">
          <v-list-item-title>Favorites</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script setup></script>
