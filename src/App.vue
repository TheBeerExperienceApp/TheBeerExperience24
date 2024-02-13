
<template>
  <v-app>
    <v-layout>
      <v-app-bar color="primary"
        image="https://thebeerexperience.be/____impro/1/onewebmedia/Foto%27s%202023/Tom%20Frederix/_M4_3294.jpg?etag=%2293f437-64f7958c%22&sourceContentType=image%2Fjpeg&withoutEnlargement&resize=2500&quality=85">
        <template v-slot:image>
          <v-img gradient="to top right, rgba(255,207,38,.8), rgba(255,207,38,.8)"></v-img>
        </template>
        <template v-slot:prepend>
          <img class="logo" src="./assets/images/tbe-logo.png" alt="The Beer Experience Logo" />
        </template>
        <!-- <v-app-bar-title>The Beer Experience 2024</v-app-bar-title> -->
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main class="px-3">
        <router-view />
      </v-main>
      <v-bottom-navigation v-model="value" color="primary" grow class="bottom-navbar-tbe">
        <v-btn>
          <v-icon>mdi-home</v-icon>

          Home
        </v-btn>

        <v-btn>
          <v-icon>mdi-glass-mug-variant</v-icon>

          Beers
        </v-btn>

        <v-btn>
          <v-icon>mdi-map-marker</v-icon>

          Map
        </v-btn>

        <v-btn>
          <v-icon>mdi-dots-horizontal</v-icon>

          Other
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
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.bottom-navbar-tbe {
  position: fixed !important;
}
</style>
