<script setup>
import Navbar from '../components/admin/navbar.vue'
</script>

<template>
  <div class="bg-zinc-900 min-h-screen text-white">
    <Navbar />
    <main class="container mt-4">
      <slot />
    </main>
  </div>
</template>
