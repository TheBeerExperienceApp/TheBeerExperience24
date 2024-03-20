<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Food</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="vendor in vendors"
        :key="vendor.naam"
      >
        <v-card>
          <v-img
            class="food-image align-end"
            gradient="to bottom, rgba(60,60,60,.1), rgba(60,60,60,.5)"
            height="200px"
            cover
            :src="`${vendor.foto}`"
            alt="Food Image"
          >
            <v-card-title class="text-white" v-text="vendor.naam" />
          </v-img>

          <v-card-text>
            <p v-for="food in vendor.food" :key="food.naam" class="font-weight-medium mb-1">• {{ food.naam }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import vendors from "../assets/food.json";

</script>