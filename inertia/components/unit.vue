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
  <section :id="lowerTitle" class="py-4">
    <h1 class="mb-3 text-center text-xl">{{ unit.name }}</h1>
    <div class="grid grid-cols-3 gap-4">
      <template v-for="course in unit.courses" v-if="unit.courses.length > 0">
        <template v-if="course.projects.length > 0">
          <h2 class="col-span-3 text-lg font-semibold">{{ course.title }}</h2>
          <Project v-for="project in course.projects" :project="project" />
        </template>
        <Empty title="Aucun projet trouvé..." v-else />
      </template>
      <Empty title="Aucun cours associé à cette unité d'enseignement..." v-else />
    </div>
  </section>
</template>
