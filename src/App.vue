
<template>
  <v-app>
    <v-layout>
      <v-app-bar color="surface-variant" title="Application bar"></v-app-bar>

      <v-main>
        <router-view />
      </v-main>
      <v-bottom-navigation v-model="value" color="teal" grow>
        <v-btn>
          <v-icon>mdi-history</v-icon>

          Recents
        </v-btn>

        <v-btn>
          <v-icon>mdi-heart</v-icon>

          Favorites
        </v-btn>

        <v-btn>
          <v-icon>mdi-map-marker</v-icon>

          Nearby
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0);
</script>
  
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
