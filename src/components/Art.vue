<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Art Experience</h1>
        <p class="text-overline">
          Ben je geïnteresseerd in een van de kunstwerken? Wil je meer
          informatie of wens je het te kopen, neem dan contact op met :
        </p>
        <p class="text-overline">
          Laila Abdelmalek: 0496 04 09 44 • Email: laila4live@telenet.be
          <br>
          Raf Nulens: 0473 98 51 00 • Email: raf.nulens@skynet.be
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="art in arts" :key="art.naam">
        <v-card @click="handleArtClick(art)">
          <v-img
            class="art-image align-end"
            gradient="to bottom, rgba(60,60,60,.1), rgba(60,60,60,.5)"
            height="200px"
            cover
            :src="`${art.foto}`"
            alt="Food Image"
          >
            <v-card-title class="text-white" v-text="art.naam" />
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogVisible" max-width="800px" scrollable>
      <v-card>
        <v-btn
          icon="mdi-close"
          variant="text"
          @click="dialogVisible = false"
          style="margin-left: auto"
        ></v-btn>
        <!-- make primary -->
        <v-card-title class="text-center text-uppercase font-weight-black"
          >{{ selectedArt.naam }}
        </v-card-title>
        <v-divider
          class="mx-5 border-opacity-100 mb-1"
          color="primary"
          :thickness="3"
        ></v-divider>
        <v-card-text>
          <div>{{ selectedArt.uitleg }}</div>
          <v-divider class="my-4 border-opacity-100"></v-divider>
          <div v-html="selectedArt.info.replace(/\n/g, '<br>')"></div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import arts from "../assets/art.json";

const selectedArt = ref({
  naam: "",
  uitleg: "",
  info: "",
  foto: "",
});
const dialogVisible = ref(false);

function handleArtClick(art: any) {
  selectedArt.value = art;
  dialogVisible.value = true;
}
</script>
