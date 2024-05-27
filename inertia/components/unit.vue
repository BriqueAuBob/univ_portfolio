<script setup>
import { computed } from 'vue';
import Project from './project.vue';
import Empty from './empty.vue';

const props = defineProps({
  unit: Object,
  selectedFilter: Object,
});
const lowerTitle = computed(() => props?.unit?.name?.toLowerCase());

const filteredCourses = computed(() => {
  return props.selectedFilter?.value !== 'all'
    ? props.unit.courses.map((course) => {
        return {
          ...course,
          projects: course.projects.filter((project) => {
            const projectDate = new Date(project.createdAt);
            const dateStart = new Date(props.selectedFilter.date_start);
            const dateEnd = new Date(props.selectedFilter.date_end);
            console.log(projectDate, dateStart, dateEnd, projectDate >= dateStart && projectDate <= dateEnd);
            return projectDate >= dateStart && projectDate <= dateEnd;
          }),
        };
      })
    : props.unit.courses;
});
</script>

<template>
  <section :id="lowerTitle" class="relative py-4">
    <h1
      class="sticky top-0 z-50 mb-4 pb-8 pt-4 text-4xl font-black backdrop-blur-xl"
      style="mask: -webkit-gradient(linear, left 100%, left 0%, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 1)))"
    >
      {{ unit.name }}
    </h1>
    <div
      class="absolute -left-32 -top-32 -z-10 h-[2%] max-h-[800px] min-h-64 w-1/2 rounded-full opacity-45 mix-blend-hard-light blur-[128px] dark:opacity-20"
      :style="`background-color: #${unit.color}`"
    ></div>
    <div
      class="absolute -bottom-32 -right-32 -z-10 h-1/4 min-h-64 w-1/2 rounded-full opacity-20 mix-blend-hard-light blur-[128px] dark:opacity-5"
      :style="`background-color: #${unit.color}`"
    ></div>
    <div class="flex flex-col gap-4">
      <template v-for="course in filteredCourses" v-if="unit.courses.length > 0">
        <template v-if="course.projects.length > 0">
          <template v-for="(project, index) in course.projects">
            <Project :project="project" />
            <hr
              :class="{
                'border-neutral-200 dark:border-neutral-700': index + 1 === course.projects.length,
                'border-dashed border-neutral-100 dark:border-neutral-900': index + 1 !== course.projects.length,
              }"
            />
          </template>
        </template>
      </template>
      <Empty title="Aucun cours associé à cette unité d'enseignement..." v-else />
    </div>
  </section>
</template>
