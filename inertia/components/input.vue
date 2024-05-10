<script setup>
const model = defineModel()
defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
  },
})
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-zinc-500 ml-4">{{ label }}</label>
    <input
      v-model="model"
      :placeholder="placeholder"
      class="w-full px-4 py-3 rounded border bg-zinc-700 border-zinc-500 focus:outline-none focus:border-neutral-200"
      :type="type"
      :class="type === 'color' && 'h-12 px-0 py-0 bg-transparent border-none'"
    />
  </div>
</template>
