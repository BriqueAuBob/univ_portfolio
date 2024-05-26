<script setup>
import { Link, router } from '@inertiajs/vue3';
import Layout from '../../../layouts/admin.vue';
import Button from '../../../components/button.vue';

defineProps({
  data: Array,
});

const deleteItem = (id) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette matière ?')) {
    router.delete(`/admin/courses/${id}`);
  }
};
</script>

<template>
  <Layout>
    <div class="flex items-center justify-between">
      <h1 class="mb-4 text-2xl font-semibold">Matières</h1>
      <Link href="/admin/courses/create">
        <Button color="green">Ajouter une matière</Button>
      </Link>
    </div>
    <table class="mt-4 w-full table-auto text-left">
      <thead class="bg-neutral-200 dark:bg-neutral-700">
        <tr>
          <th class="py-4">Code</th>
          <th class="py-4">Nom</th>
          <th class="py-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="course in data"
          class="border-b border-neutral-200 bg-neutral-100/20 dark:border-neutral-700 dark:bg-neutral-800/90"
          :key="course.id"
        >
          <td class="py-4">{{ course.code }}</td>
          <td class="py-4">{{ course.title }}</td>
          <td class="items-center space-x-2 py-2">
            <Link :href="`/admin/courses/${course.id}/edit`">
              <Button color="blue"> Editer </Button>
            </Link>
            <Button color="red" @click="deleteItem(course.id)"> Supprimer </Button>
          </td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>
