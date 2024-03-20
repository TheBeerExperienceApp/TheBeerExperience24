<template>
  <div>
    <v-row class="text-center">
      <v-col>
        <h1><span v-if="isLikedRoute">Liked </span>Brouwers</h1>
      </v-col>
    </v-row>
    <v-text-field
      v-model="searchQuery"
      label="Search"
      solo
      clearable
      @input="filterBrewers"
      append-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="4"
        v-for="brewer in filteredBrewers"
        :key="brewer.naam"
      >
        <v-card @click="handleBrewerClick(brewer)">
          <v-img
            class="brewer-image align-end"
            gradient="to bottom, rgba(60,60,60,.1), rgba(60,60,60,.5)"
            height="200px"
            fit
            :src="`${brewer.foto}`"
            alt="Brewer Image"
          >
            <v-card-title class="text-white" v-text="brewer.naam" />
          </v-img>

          <v-card-actions>
            <v-btn
              @click.stop="handleLikeClick(brewer)"
              size="small"
              color="surface-variant"
              variant="text"
              :icon="isBrewerLiked(brewer) ? 'mdi-heart' : 'mdi-heart-outline'"
            ></v-btn>
            <p>{{ brewer.locatie }} - {{ brewer.stand }}</p>
            <p style="margin-left: auto">{{ brewer.tijd }}</p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogVisible" max-width="800px" scrollable>
      <v-card>
        <div style="position: relative">
          <v-btn
            icon="mdi-close"
            variant="text"
            @click="dialogVisible = false"
            style="position: absolute; top: 0; right: 0; z-index: 2"
          ></v-btn>
          <v-img
            height="150"
            fit
            :src="`${selectedBrewer.foto}`"
            alt="Brewer Image"
            class="mx-5 mt-2"
          />
        </div>
        <!-- make primary -->
        <v-card-title class="text-center text-uppercase font-weight-black"
          >{{ selectedBrewer.naam }}
        </v-card-title>
        <v-divider
          class="mx-5 border-opacity-100 mb-1"
          color="primary"
          :thickness="3"
        ></v-divider>
        <v-card-text>
          <div class="text-center mb-2 text-overline">
            {{ selectedBrewer.stand }} • {{ selectedBrewer.locatie }} <span v-if="selectedBrewer.tijd">| {{ selectedBrewer.tijd }}</span> | {{ selectedBrewer.land}}
          </div>
          <span>{{ selectedBrewer.info }}</span>
          <v-divider class="my-4 border-opacity-100"></v-divider>
          <h3 class="mb-3 text-uppercase">Bieren</h3>
          <div>
            <v-row
              v-for="(beer, index) in beers.filter(
                (x) => selectedBrewer.naam.includes(x.brouwer)
              )"
              :key="index"
            >
              <v-col>
                <h4 class="beer-name">{{ beer.naam }}</h4>
                <p>{{ beer.stijl }}</p>
                <p>{{ beer.procent }}</p>
                <p>{{ beer.special }}</p>
                <p class="text-body-2">{{ beer.beschrijving }}</p>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import brewersUnfiltered from "../assets/brouwers.json";
import beers from "../assets/bieren.json";

const route = useRoute();
const isLikedRoute = ref(route.path === "/TheBeerExperience24/liked");
const dialogVisible = ref(false);
const selectedBrewer = ref({
  naam: "",
  stand: "",
  locatie: "",
  info: "",
  link: "",
  tijd: "",
  foto: "assets/images/tbe-logo.png",
  liked: false,
  land: ""
});
const brewers = ref<any>([]);
const likedBrewers = ref<any>([]);
let filteredBrewers = ref<any>([]);
const searchQuery = ref("");

onMounted(() => {
  const storedBrewers = localStorage.getItem("likedBrewers");
  if (storedBrewers) {
    likedBrewers.value = JSON.parse(storedBrewers);
  }

  if (isLikedRoute.value) {
    brewers.value = likedBrewers.value;
  } else {
    brewers.value = brewersUnfiltered;
  }
  filteredBrewers.value = [...brewers.value];
});

const filterBrewers = () => {
  if (!searchQuery.value) {
    filteredBrewers.value = [...brewers.value];
  } else {
    filteredBrewers.value = [...brewers.value.filter((x: any) =>
      x.naam.toLowerCase().includes(searchQuery.value.toLowerCase())
    )];
  }
};

function handleBrewerClick(brewer: any) {
  selectedBrewer.value = brewer;
  dialogVisible.value = true;
}

function handleLikeClick(brewer: any) {
  brewer.liked = !brewer.liked;

  if (brewer.liked) {
    likedBrewers.value.push(brewer);
  } else {
    likedBrewers.value = likedBrewers.value.filter(
      (b: { naam: any }) => b.naam !== brewer.naam
    );

    if (isLikedRoute.value) {
      brewers.value = brewers.value.filter(
        (b: { naam: any }) => b.naam !== brewer.naam
      );
    }
  }

  localStorage.setItem("likedBrewers", JSON.stringify(likedBrewers.value));
  console.log(likedBrewers.value);
}

function isBrewerLiked(brewer: { naam: any }) {
  return likedBrewers.value.some(
    (likedBrewer: { naam: any }) => likedBrewer.naam === brewer.naam
  );
}
</script>

<style scoped lang="scss">
.brewer-card {
  margin-bottom: 10px;
  cursor: pointer;
}

.brewer-image {
  width: 100%;
  height: 120px;
  object-fit: contain;
}

.brewer-details {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.logo {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.stand {
  margin-right: 10px;
}

.location {
  margin-right: 10px;
}

.like-icon {
  cursor: pointer;
}

.heart-icon {
  font-size: 20px;
}

.filled {
  color: red;
}

.empty {
  color: gray;
}

.beer-name {
  background-color: rgba(var(--v-theme-secondary), 0.3);
}
</style>
