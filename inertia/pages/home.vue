<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
// @ts-ignore
import Unit from '../components/unit.vue';
// @ts-ignore
import Layout from '../layouts/default.vue';
import { PropType, ref, watch, onMounted } from 'vue';

defineProps({
  units: {
    type: Array as PropType<{ name: string; color: string; courses: any[] }[]>,
    required: true,
  },
});

const filters: {
  name: string;
  value: string;
  date_start?: string;
  date_end?: string;
}[] = [
  {
    name: 'Tout afficher',
    value: 'all',
  },
  {
    name: '1ère année',
    value: '1st',
    date_start: '2003-01-16',
    date_end: '2023-08-31',
  },
  {
    name: '2ème année',
    value: '2nd',
    date_start: '2023-09-01',
    date_end: '2024-08-31',
  },
];
const selectedFilter = ref(filters[0]);
onMounted(() => {
  if (window.location.search.includes('filter')) {
    const filter = filters.find((filter) => filter.value === window.location.search.split('=')[1]);
    if (filter) {
      selectedFilter.value = filter;
    }
  }
});

watch(
  () => selectedFilter.value,
  () => {
    window.history.pushState({}, '', `?filter=${selectedFilter.value.value}`);
  }
);
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
              class="flex rounded-full px-10 py-4 text-4xl text-neutral-800 outline outline-0 backdrop-blur-sm duration-200 ease-in hover:-translate-y-1 hover:text-black hover:outline-2 dark:text-white"
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
      <div class="flex gap-2 rounded-3xl bg-white/50 p-2 dark:bg-neutral-700">
        <button
          v-for="filter in filters"
          :key="filter.value"
          @click="selectedFilter = filter"
          :class="{
            'bg-blue-500 text-white': selectedFilter?.value === filter?.value,
            'bg-white text-neutral-800 hover:bg-blue-50 dark:bg-neutral-600 dark:text-white': selectedFilter?.value !== filter?.value,
          }"
          class="rounded-full px-4 py-2 duration-200"
        >
          {{ filter.name }}
        </button>
      </div>
      <Unit v-for="unit in units" :unit="unit" :selectedFilter="selectedFilter" />
    </main>
  </Layout>
</template>
