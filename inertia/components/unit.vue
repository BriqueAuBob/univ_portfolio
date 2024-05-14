<script setup>
import { computed } from 'vue';
import Project from './project.vue';
import Empty from './empty.vue';

const props = defineProps({
  unit: Object,
});
const lowerTitle = computed(() => props?.unit?.name?.toLowerCase());
</script>

<template>
  <section :id="lowerTitle" class="py-4 relative">
    <h1 class="text-4xl font-black mb-4">{{ unit.name }}</h1>
    <div class="absolute w-1/2 h-1/4 min-h-64 -top-32 -left-32 blur-[128px] -z-10 rounded-full opacity-45 dark:opacity-20 mix-blend-hard-light" :style="`background-color: #${unit.color}`"></div>
    <div class="absolute w-1/2 h-1/4 min-h-64 -bottom-32 -right-32 blur-[128px] -z-10 rounded-full opacity-20 dark:opacity-5 mix-blend-hard-light" :style="`background-color: #${unit.color}`"></div>
    <div class="flex flex-col gap-4">
      <template v-for="course in unit.courses" v-if="unit.courses.length > 0">
        <template v-if="course.projects.length > 0">
          <template v-for="(project, index) in course.projects">
            <Project :project="project" />
            <hr :class="{'border-neutral-200 dark:border-neutral-700': index + 1 === course.projects.length, 'border-dashed border-neutral-100 dark:border-neutral-900': index + 1 !== course.projects.length}" />
          </template>
        </template>
        <Empty title="Aucun projet trouvé..." v-else />
      </template>
      <Empty title="Aucun cours associé à cette unité d'enseignement..." v-else />
    </div>
  </section>
</template>
