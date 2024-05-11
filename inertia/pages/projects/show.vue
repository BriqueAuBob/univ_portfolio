<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <img :src="project.image" alt="Project image" class="mb-4 h-40 w-full rounded-t-2xl object-cover" />
</template>
