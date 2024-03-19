<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Map</h1>
        <p class="subtitle">
          Om de map te kunnen zien, kun je deze ook downloaden met onderstaande
          knop.
        </p>
        <v-btn
          color="primary"
          href="/TheBeerExperience24/assets/plan.pdf"
          download
          >Download Map</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="0">
        <img
          :src="mapImagePath"
          style="object-fit: contain; width: 100%; height: 100%;"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const mapImagePath = "/TheBeerExperience24/assets/images/plan.png";
</script>
