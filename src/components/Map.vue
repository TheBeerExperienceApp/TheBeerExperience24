<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Map</h1>
        <p class="subtitle my-5">
          Om de map te kunnen zien, kun je deze downloaden met onderstaande
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
    <v-row v-if="!isMobileView">
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
import { ref } from "vue";
const mapImagePath = "/TheBeerExperience24/assets/images/plan.png";

const isMobileView = ref(window.innerWidth <= 768);
</script>
