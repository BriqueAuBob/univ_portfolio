<script setup>
defineProps({
  title: {
    type: String,
    default: 'Aucun résultat trouvé...',
  },
})
</script>

<template>
  <p class="col-span-3 text-center text-gray-500 text-sm mb-4 leading-relaxed">
    {{ title }}<br />
    Revenez plus tard !
  </p>
</template>
