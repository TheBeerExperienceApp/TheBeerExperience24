<template>
    <div>
        <h1>Brewers</h1>
        <v-row>
            <v-col cols="12">
                <v-card class="brewer-card" v-for="brewer in brewers" :key="brewer.naam" @click="handleBrewerClick(brewer)">
                    <v-row>
                        <v-col cols="3">
                            <img src="../assets/images/tbe-logo.png" alt="Brewer Image" />
                        </v-col>
                        <v-col cols="8">
                            <v-card-title>{{ brewer.naam }}</v-card-title>
                            <v-card-text>{{ brewer.locatie }}</v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialogVisible" max-width="500px">
            <v-card>
                <v-card-title>{{ selectedBrewer.naam }}</v-card-title>
                <v-card-text>{{ selectedBrewer.info }}</v-card-text>
                <div class="brewer-details">
                    <img class="logo" :src="selectedBrewer.foto" alt="Logo" />
                    <div class="stand">{{ selectedBrewer.stand }}</div>
                    <div class="location">{{ selectedBrewer.locatie }}</div>
                    <div class="like-icon" @click="handleLikeClick(selectedBrewer)">
                        <i :class="['heart-icon', { 'filled': selectedBrewer.liked, 'empty': !selectedBrewer.liked }]"></i>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import brewers from '../assets/brouwers.json';

const dialogVisible = ref(false);
const selectedBrewer = ref({
    "naam": "",
    "stand": "",
    "locatie": "",
    "info": "",
    "link": "",
    "foto": "assets/images/tbe-logo.png",
    "liked": false
},);

function handleBrewerClick(brewer: any) {
    selectedBrewer.value = brewer;
    dialogVisible.value = true;
}

function handleLikeClick(brewer: any) {
    brewer.liked = !brewer.liked;
    localStorage.setItem('likedBrewer', JSON.stringify(brewer));
}
</script>

<style scoped>
.brewer-card {
    margin-bottom: 10px;
    cursor: pointer;
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
</style>
