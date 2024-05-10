<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'cyan',
  },
})

const classes = computed(() => {
  // bg-red-600 hover:bg-red-500
  // bg-green-600 hover:bg-green-500
  // bg-blue-600 hover:bg-blue-500
  // bg-cyan-600 hover:bg-cyan-500
  return `bg-${props.color}-600 hover:bg-${props.color}-500`
})
</script>

<template>
  <button
    :class="[
      classes,
      'text-white font-bold py-4 px-4 rounded-full hover:-translate-y-1 ease-in-out duration-200 hover:shadow-lg',
    ]"
  >
    <slot />
  </button>
</template>
