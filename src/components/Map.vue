<template>
  <div>
    <iframe :src="docViewerLink" width="100%" height="600px"></iframe>
  </div>
</template>

<script setup lang="ts">
const baseUrl = window.location.origin;
const pdfPath = "/TheBeerExperience24/assets/plan.pdf";
const pdfUrl = `${baseUrl}${pdfPath}`;
const docViewerLink = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
</script>