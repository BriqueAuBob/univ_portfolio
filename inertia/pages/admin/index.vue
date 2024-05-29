<script setup>
import Layout from '../../layouts/admin.vue';
import Button from '../../components/button.vue';
import { ref } from 'vue';

const uploaded = ref([]);
const file = ref(null);

const uploadFile = () => {
  const formData = new FormData();
  formData.append('file', file.value);

  fetch('/admin/upload/', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      uploaded.value = [...uploaded.value, data];
    })
    .catch((error) => {
      console.error('An error occurred while uploading the file', error);
    });
};
</script>

<template>
  <Layout>
    <h1 class="text-3xl font-bold">Admin Dashboard</h1>
    <hr class="my-4 w-full" />
    <h2 class="mb-2 mt-4 text-lg">Mettre en ligne des fichiers</h2>
    <form class="flex flex-col gap-2" @submit.prevent="uploadFile">
      <input type="file" name="file" class="mb-3" @input="file = $event.target.files[0]" />
      <Button type="submit">Upload</Button>
    </form>
    <div class="flex flex-col gap-2">
      <h2 class="mb-2 mt-4 text-lg">Fichiers mis en ligne</h2>
      <ul class="flex flex-col gap-4">
        <li v-for="file in uploaded" :key="file.id" class="flex items-center gap-2">
          <img
            :src="file.url"
            alt="file.name"
            class="h-20 w-20 rounded-md object-cover"
            v-if="file.url.match(/\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i)"
          />
          <a :href="file.url" target="_blank">{{ file.url }}</a>
        </li>
      </ul>
    </div>
  </Layout>
</template>
