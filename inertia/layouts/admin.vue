<script setup>
import Navbar from '../components/admin/navbar.vue';
</script>

<template>
  <Navbar />
  <main class="container mt-4">
    <slot />
  </main>
</template>
