<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'cyan',
  },
});

const classes = computed(() => {
  // bg-red-600 hover:bg-red-500
  // bg-green-600 hover:bg-green-500
  // bg-blue-600 hover:bg-blue-500
  // bg-cyan-600 hover:bg-cyan-500
  return `bg-${props.color}-600 hover:bg-${props.color}-500`;
});
</script>

<template>
  <button :class="[classes, 'rounded-full px-4 py-4 font-bold text-white duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg']">
    <slot />
  </button>
</template>
