<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
// @ts-ignore
import Unit from '../components/unit.vue';
// @ts-ignore
import Layout from '../layouts/default.vue';
import { PropType } from 'vue';

defineProps({
  units: {
    type: Array as PropType<{ name: string; color: string; courses: any[] }[]>,
    required: true,
  },
});
</script>

<template>
  <Layout>
    <Head title="Accueil" />

    <header class="container py-32 text-left">
      <h1 class="text-6xl font-semibold">
        Portfolio universitaire de
        <span class="text-7xl font-black">Brandon Clément</span>
      </h1>
      <h2 class="mt-2 text-xl font-semibold">Etudiant en BUT MMI à l'IUT de Troyes</h2>
      <nav class="mt-4">
        <ul class="flex flex-wrap gap-2">
          <li v-for="unit in units">
            <a
              class="flex rounded-3xl px-10 py-4 text-4xl text-neutral-800 outline outline-0 duration-200 ease-in hover:-translate-y-1 hover:text-black hover:outline-2"
              :href="`#${unit.name.toLowerCase()}`"
              :style="{
                backgroundColor: `#${unit.color}90`,
                outlineColor: `#${unit.color}`,
              }"
            >
              {{ unit.name }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="container py-8">
      <Unit v-for="unit in units" :unit="unit" />
    </main>
  </Layout>
</template>
