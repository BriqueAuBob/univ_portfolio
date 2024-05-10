<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <img
    :src="project.image"
    alt="Project image"
    class="w-full h-40 object-cover mb-4 rounded-t-2xl"
  />
</template>
