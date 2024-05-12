<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h1 class="text-2xl font-black">{{ project.name }}</h1>
  <article
    class="grid grid-cols-6 gap-4"
  >
    <img :src="`/uploads/${project.image}`" alt="Project image" class="col-span-2 mb-4 w-full rounded-2xl object-cover" />
    <div class="pb-4 col-span-4">
      <h2 class="mt-1 text-lg font-medium">{{ project.description }}</h2>
      <div class="prose prose-zinc dark:prose-invert" v-html="project.content" v-if="project.content"></div>
      <div v-else>
        <p>Aucun contenu pour ce projet.</p>
      </div>
    </div>
  </article>
</template>
