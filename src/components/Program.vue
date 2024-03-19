<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Programma</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="0">
        <img
          :src="programImagePath"
          style="object-fit: contain; width: 100%; height: 100%"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const programImagePath = "/TheBeerExperience24/assets/images/programma.png";
</script>
