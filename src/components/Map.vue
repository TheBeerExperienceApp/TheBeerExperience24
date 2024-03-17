<template>
    <div>
      <iframe :src="pdfSource" width="100%" height="600px"></iframe>
    </div>
  </template>
  
  <script setup lang="ts">
  // either URL, Base64, binary, or document proxy
  const pdfSource = "/TheBeerExperience24/assets/plan.pdf#toolbar=0#zoom=50";
  </script>