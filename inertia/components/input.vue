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
    <label class="ml-4 block text-sm font-medium dark:text-zinc-500">{{ label }}</label>
    <input
      v-model="model"
      :placeholder="placeholder"
      class="w-full rounded-xl border-neutral-300 bg-white focus:border-neutral-200 focus:outline-none dark:border-zinc-500 dark:bg-zinc-700"
      :type="type"
      :class="type === 'color' ? 'h-12 bg-transparent px-0 py-0' : 'border px-4 py-3'"
    />
  </div>
</template>
