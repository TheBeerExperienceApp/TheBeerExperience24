<template>
  <VuePdfEmbed annotation-layer text-layer :source="pdfSource" />
</template>

<script setup lang="ts">
import VuePdfEmbed from "vue-pdf-embed";

// essential styles
import "vue-pdf-embed/dist/style/index.css";

// optional styles
import "vue-pdf-embed/dist/style/annotationLayer.css";
import "vue-pdf-embed/dist/style/textLayer.css";

// either URL, Base64, binary, or document proxy
const pdfSource = "/TheBeerExperience24/assets/plan.pdf";
</script>
