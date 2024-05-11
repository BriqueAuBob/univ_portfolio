<script setup>
const model = defineModel();
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
});
</script>

<template>
  <div>
    <label class="ml-4 block text-sm font-medium text-zinc-500">{{ label }}</label>
    <input
      v-model="model"
      :placeholder="placeholder"
      class="w-full rounded border border-zinc-500 bg-zinc-700 px-4 py-3 focus:border-neutral-200 focus:outline-none"
      :type="type"
      :class="type === 'color' && 'h-12 border-none bg-transparent px-0 py-0'"
    />
  </div>
</template>
