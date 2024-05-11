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
  <Link :href="`/projets/${project.id}`">
    <article class="cursor-pointer rounded-2xl border-2 bg-white shadow-sm duration-200 ease-in hover:-translate-y-1 hover:shadow-md">
      <img :src="project.image" alt="Project image" class="mb-4 h-40 w-full rounded-t-2xl object-cover" />
      <div class="px-4 pb-4">
        <h1 class="text-xl font-semibold">{{ project.name }}</h1>
        <h2 class="mt-1 text-lg font-medium">{{ project.description }}</h2>
        <span class="mt-2 block text-sm text-gray-500"> Créé le {{ new Date(project.createdAt).toLocaleDateString() }} </span>
      </div>
    </article>
  </Link>
</template>
