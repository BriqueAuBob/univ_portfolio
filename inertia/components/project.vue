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
  const text = customText || props.project.content;
  return text?.replace(/class="language-/g, 'class="hljs language-');
};
</script>

<template>
  <article class="flex flex-col gap-2">
    <div class="relative grid-cols-6 gap-4 lg:grid">
      <div class="h-fit lg:sticky lg:top-24 lg:col-span-2">
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
