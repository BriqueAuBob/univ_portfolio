<script setup>
import Navbar from '../components/admin/navbar.vue';
</script>

<template>
  <div class="min-h-screen bg-zinc-900 text-white">
    <Navbar />
    <main class="container mt-4">
      <slot />
    </main>
  </div>
</template>
