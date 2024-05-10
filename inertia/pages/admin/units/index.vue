<script setup>
import { Link } from '@inertiajs/vue3'
import Layout from '../../../layouts/admin.vue'
import Button from '../../../components/button.vue'

defineProps({
  data: Array,
})
</script>

<template>
  <Layout>
    <div class="flex justify-between items-center">
      <h1 class="font-semibold text-2xl mb-4">Unités d'enseignements</h1>
      <Link href="/admin/units/create">
        <Button color="green">Ajouter une unité d'enseignements</Button>
      </Link>
    </div>
    <table class="table-auto w-full mt-4 text-left">
      <thead class="bg-zinc-700">
        <tr>
          <th class="py-4">Nom</th>
          <th class="py-4">Couleur</th>
          <th class="py-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="unit in data" class="border-b border-zinc-700 bg-zinc-800/90" :key="unit.id">
          <td class="py-4">{{ unit.name }}</td>
          <td class="flex items-center gap-2 py-2">
            <div class="w-8 h-8 rounded-full" :style="`background-color: #${unit.color}`" />
            #{{ unit.color }}
          </td>
          <td class="space-x-2 items-center py-2">
            <Button color="blue"> Editer </Button>
            <Button color="red"> Supprimer </Button>
          </td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>
