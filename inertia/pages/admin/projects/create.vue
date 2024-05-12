<script setup>
import { reactive, computed } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import Layout from '../../../layouts/admin.vue';
import Button from '../../../components/button.vue';
import Input from '../../../components/input.vue';
import tiptap from '../../../components/tiptap.vue';

const props = defineProps({
  project: Object,
});

const form = reactive({
  name: props.project?.name,
  description: props.project?.description,
  content: props.project?.content,
  image: '',
});
const translatedFields = {
  name: 'Nom',
  description: 'Description',
  content: 'Contenu',
  image: 'Image',
};

const submit = async () => {
  try {
    await router.post('/admin/projects/', form, {
      forceFormData: true
    });
  } catch (error) {
    console.log('An error occurred while updating the project', error);
  }
};

const page = usePage();
const errors = computed(() => {
  return page.props.errors;
});

const getFieldError = (field) => {
  return errors?.value?.[field] ? errors?.value?.[field]?.[0] : '';
};
</script>

<template>
  <Layout>
    <div class="flex items-center justify-between">
      <h1 class="mb-4 text-2xl font-semibold">Création d'un projet</h1>
    </div>
    <div>
      <div class="mb-2" v-for="(_, field) in form">
        <Input
          :placeholder="`Entrez le ${translatedFields[field].toLowerCase()} du projet`"
          :label="translatedFields[field]"
          v-model="form[field]"
          v-if="field !== 'content' && field !== 'image'"
        />
        <input type="file" @input="form.image = $event.target.files[0]"v-else-if="field === 'image'" />
        <tiptap v-model="form.content" v-else />
        <span class="text-sm text-red-400">
          {{ getFieldError(field) }}
        </span>
      </div>
      <progress v-if="form.progress" :value="form.progress.percentage" max="100">
        {{ form.progress.percentage }}%
      </progress>
      <Button color="green" class="mt-4 w-full" @click="submit">Créer</Button>
    </div>
  </Layout>
</template>
