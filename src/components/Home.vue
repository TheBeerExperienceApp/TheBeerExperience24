<template>
  <v-container>
    <v-row class="section pb-1">
      <v-col>
        <h1 class="section-title">Welkom bij "The Beer Experience 2024"</h1>
        <p class="section-content">"The Beer Experience" - een viering van bier in al zijn glorie. Verken, ontdek, geniet en laat je verrassen door wat de wereld van bier te bieden heeft. We heten je van harte welkom!</p>
        <img
            src="/assets/images/HOPPY_wink.png"
            alt="Hoppy Wink"
            style="height: 80px;"
          />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="section">
      <v-col>
        <h2 class="section-subtitle">Brouwers & bieren</h2>
        <p class="section-content">Ontdek een wereld van bieren, variërend van verfijnde ambachtelijke brouwsels tot gedurfde experimenten en traditionele klassiekers. Laat je smaakpapillen verwennen terwijl je langs onze diverse selectie wandelt, waar elke slok een nieuw avontuur is.</p>
        <v-btn class="cta-button" color="primary py-3" to="/TheBeerExperience24/beers">Ontdek onze bieren</v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="section">
      <v-col>
        <h2 class="section-subtitle">Koop onze bieren</h2>
        <p class="section-content">Maar dat is nog niet alles - bij "The Beer Experience" draait het niet alleen om proeven. Wij zijn er trots op ook een breed scala aan bieren te verkopen, zodat je favorieten mee naar huis kunt nemen en kunt delen met vrienden en familie. Ontdek je nieuwe favoriete bier en neem een stukje van de ervaring mee naar huis.</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="section">
      <v-col>
        <h2 class="section-subtitle">Programma</h2>
        <p class="section-content">Ontdek het volledige spectrum van bierbeleving met ons boeiende programma vol foodpairings en muziek. Wat wil een mens nog meer? :)</p>
        <v-btn class="cta-button" color="secondary py-3" to="/TheBeerExperience24/program">Ontdek het programma</v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="section">
      <v-col>
        <h2 class="section-subtitle">Food</h2>
        <p class="section-content">En laten we het belangrijkste niet vergeten - het eten! Geniet van heerlijke culinaire creaties die perfect passen bij de verschillende bieren die we aanbieden.</p>
        <v-btn class="cta-button" color="secondary py-3" to="/TheBeerExperience24/food">Ontdek hier wat je kunt eten</v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="section">
      <v-col>
        <h2 class="section-subtitle">Kunstwerken</h2>
        <p class="section-content">Onder de titel 'Art Experience' tonen een 16-tal kunstenaars uit Heusden-Zolder hun creaties in diverse disciplines. De kunstwerken zijn verspreid over de locatie en kan je herkennen aan een bordje met wat info erbij. Aan de kunstenaars werd gevraagd om een 'bier gerelateerd' werk te maken. Keuze en plaatsing van de werken lag in handen van Laila Abdelmalek en Raf Nulens. Het is al voor het 3e jaar op rij dat The Beer Experience kunst omarmt als deel van de 'experience'.</p>
        <v-btn class="cta-button" color="secondary py-3" to="/TheBeerExperience24/art">Ontdek onze kunstwerken</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>

<style>
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f2f2f2;
  }

  .section {
    padding: 2rem 0;
    text-align: center;
  }

  .section-title {
    font-size: 3rem;
    color: rgba(var(--v-theme-primary), 1);
    text-shadow: 2px 4px 0px rgba(109, 109, 109, 0.344);
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
  }

  .section-subtitle {
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 0.5rem;
  }

  .section-content {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }

  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1rem;
  }

  .cta-button:hover {
    background-color: #0056b3;
  }

  .v-divider {
    margin: 2rem 0;
  }
</style>
