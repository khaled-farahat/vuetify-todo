<template>
  <VApp class="bg-grey-lighten-4">
    <Navbar />
    <VMain class=" mx-4 mb-4">
      <RouterView />
    </VMain>
  </VApp>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
