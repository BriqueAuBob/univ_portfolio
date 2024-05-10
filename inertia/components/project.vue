<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Link :href="`/projets/${project.id}`">
    <article
      class="bg-white border-2 rounded-2xl shadow-sm hover:-translate-y-1 ease-in duration-200 hover:shadow-md cursor-pointer"
    >
      <img
        :src="project.image"
        alt="Project image"
        class="w-full h-40 object-cover mb-4 rounded-t-2xl"
      />
      <div class="px-4 pb-4">
        <h1 class="font-semibold text-xl">{{ project.name }}</h1>
        <h2 class="font-medium text-lg mt-1">{{ project.description }}</h2>
        <span class="text-sm text-gray-500 block mt-2">
          Créé le {{ new Date(project.createdAt).toLocaleDateString() }}
        </span>
      </div>
    </article>
  </Link>
</template>
