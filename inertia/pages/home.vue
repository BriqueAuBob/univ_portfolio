<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import Unit from '../components/unit.vue'
import { PropType } from 'vue'

defineProps({
  units: {
    type: Array as PropType<{ name: string; courses: any[] }[]>,
    required: true,
  },
})
</script>

<template>
  <Head title="Accueil" />

  <header class="py-32 text-center bg-cyan-800">
    <span class="bg-white/90 px-4 py-3 rounded-3xl shadow-md backdrop-blur-md text-sm font-medium">
      Portfolio universitaire
    </span>
    <h1 class="text-3xl font-semibold mt-6 text-white">Brandon Clément</h1>
  </header>
  <nav>
    <ul class="flex justify-center gap-8 py-4 bg-cyan-900">
      <li v-for="unit in units">
        <a
          class="text-neutral-300 hover:text-white ease-in duration-200"
          :href="`#${unit.name.toLowerCase()}`"
        >
          {{ unit.name }}
        </a>
      </li>
    </ul>
  </nav>
  <main class="container py-8">
    <Unit v-for="unit in units" :unit="unit" />
  </main>
</template>
