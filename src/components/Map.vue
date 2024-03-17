<template>
    <div class="pdf-container">
      <iframe :src="pdfUrl" class="pdf-iframe"></iframe>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const pdfUrl = ref('/TheBeerExperience24/assets/plan.pdf#toolbar=0');
  </script>
  
  <style scoped>
  .pdf-container {
    width: 100%;
    height: 100vh; /* Use the full viewport height */
    overflow: auto; /* Enable scrolling if the content is larger than the container */
  }
  
  .pdf-iframe {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 600px) {
    .pdf-iframe {
      height: 600px; /* Adjust the height for small screens */
    }
  }
  </style>