<script setup>
import { Link } from '@inertiajs/vue3';
import { format, isValid } from 'date-fns';
import { fr } from 'date-fns/locale';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  unit: {
    type: Object,
    required: true,
  },
});

const getProjectText = () => {
  const customText = props.project.customTexts.find(
    (customText) => customText.projectId === props.project.id && customText.unitId === props.unit.id
  )?.text;
  console.log(props.project.name, customText);
  return customText || props.project.content;
};
</script>

<template>
  <article class="flex flex-col gap-2">
    <div class="relative grid grid-cols-6 gap-4">
      <div class="sticky top-24 col-span-2 h-fit">
        <img :src="`/uploads/${project.image}`" alt="Project image" class="mb-4 w-full rounded-2xl object-cover" />

        <h1 class="text-2xl font-black">{{ project.name }}</h1>
        <span v-if="project.createdAt && isValid(new Date(project.createdAt))" class="text-lg font-medium">{{
          format(new Date(project.createdAt), 'MMMM yyyy', { locale: fr })
        }}</span>
      </div>
      <div class="col-span-4 pb-4">
        <h2 class="mt-1 text-lg font-medium">{{ project.description }}</h2>
        <div class="prose prose-zinc dark:prose-invert" v-html="getProjectText()" v-if="getProjectText()"></div>
        <div v-else>
          <p>Aucun contenu pour ce projet.</p>
        </div>
      </div>
    </div>
  </article>
</template>
