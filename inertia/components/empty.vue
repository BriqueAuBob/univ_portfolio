<script setup>
defineProps({
  title: {
    type: String,
    default: 'Aucun résultat trouvé...',
  },
});
</script>

<template>
  <p class="col-span-3 mb-4 text-sm leading-relaxed text-gray-500">
    {{ title }}<br />
    Revenez plus tard !
  </p>
</template>
