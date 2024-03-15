<template>
    <div>
        <h1>Brewers</h1>
        <v-row>
            <v-col cols="12" sm="4" md="4" v-for="brewer in brewers" :key="brewer.naam">
                <v-card @click="handleBrewerClick(brewer)">
                    <v-img class="brewer-image align-end" gradient="to bottom, rgba(255,212,60,.2), rgba(60,60,60,.5)"
                        height="200px" fit :src="`${brewer.foto}`" alt="Brewer Image">
                        <v-card-title class="text-white" v-text="brewer.naam" />
                    </v-img>

                    <v-card-actions>
                        <v-btn @click.stop="handleLikeClick(selectedBrewer)" size="small" color="surface-variant" variant="text" :icon="`mdi-heart${selectedBrewer.liked ? '' : '-outline'}`"></v-btn>
                        <p>{{ brewer.locatie }}</p>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialogVisible" max-width="500px">
            <v-card>
                <v-card-title>{{ selectedBrewer.naam }}</v-card-title>
                <v-card-text>{{ selectedBrewer.info }}</v-card-text>
                <div class="brewer-details">
                    <img cols="3">
                    <img class="logo" :src="`/TheBeerExperience24/src/${selectedBrewer.foto}`" alt="Logo" />
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
</style>
