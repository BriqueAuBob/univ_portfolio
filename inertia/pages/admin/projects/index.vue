<script setup>
import { Link } from '@inertiajs/vue3';
import Layout from '../../../layouts/admin.vue';
import Button from '../../../components/button.vue';

defineProps({
  data: Array,
});
</script>

<template>
  <Layout>
    <div class="flex items-center justify-between">
      <h1 class="mb-4 text-2xl font-semibold">Projets</h1>
      <Link href="/admin/projects/create">
        <Button color="green">Ajouter un projet</Button>
      </Link>
    </div>
    <table class="mt-4 w-full table-auto text-left">
      <thead class="bg-neutral-200 dark:bg-neutral-700">
        <tr>
          <th class="py-4">Image</th>
          <th class="py-4">Nom</th>
          <th class="py-4">Description</th>
          <th class="py-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="project in data"
          class="border-b border-neutral-200 bg-neutral-100/20 dark:border-neutral-700 dark:bg-neutral-800/90"
          :key="project.id"
        >
          <td class="py-4">
            <img
              :src="`/uploads/${project.image}`"
              alt="project.name"
              class="w-64 h-32 object-cover rounded-lg"
            />
          </td>
          <td class="py-4">{{ project.name }}</td>
          <td class="py-4">{{ project.description || 'Non définie' }}</td>
          <td class="items-center space-x-2 py-2">
            <Link :href="`/admin/projects/${project.id}/edit`">
              <Button color="blue"> Editer </Button>
            </Link>
            <Button color="red"> Supprimer </Button>
          </td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>
