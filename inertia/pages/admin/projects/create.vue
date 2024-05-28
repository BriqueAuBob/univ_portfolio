<script setup>
import { reactive, computed } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import Layout from '../../../layouts/admin.vue';
import Button from '../../../components/button.vue';
import Input from '../../../components/input.vue';
import tiptap from '../../../components/tiptap.vue';

const props = defineProps({
  project: Object,
  courses: Array,
});

const fieldValues = {
  courseId: props.courses,
};
const form = reactive({
  name: '',
  description: '',
  content: '',
  image: '',
  courseId: null,
  createdAt: '',
});
const translatedFields = {
  name: 'Nom',
  description: 'Description',
  content: 'Contenu',
  image: 'Image',
  courseId: 'Matière',
  createdAt: 'Date de création',
};

const submit = async () => {
  try {
    await router.post('/admin/projects/', form, {
      forceFormData: true,
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
          v-if="field !== 'content' && field !== 'image' && !fieldValues[field]"
          :type="field === 'createdAt' ? 'date' : 'text'"
        />
        <input class="mt-4" type="file" @input="form.image = $event.target.files[0]" v-else-if="field === 'image'" />
        <select
          v-model="form.courseId"
          v-else-if="fieldValues[field]"
          class="mt-4 w-full rounded-xl border border-neutral-300 bg-white p-4 focus:border-neutral-200 focus:outline-none dark:border-zinc-500 dark:bg-zinc-700"
        >
          <option disabled selected>Choisissez une matière</option>
          <option v-for="course in fieldValues[field]" :key="course.id" :value="course.id">{{ course.code }} - {{ course.title }}</option>
        </select>
        <tiptap class="mt-4" v-model="form.content" v-else />
        <span class="text-sm text-red-400">
          {{ getFieldError(field) }}
        </span>
      </div>
      <progress v-if="form.progress" :value="form.progress.percentage" max="100">{{ form.progress.percentage }}%</progress>
      <Button color="green" class="mt-4 w-full" @click="submit">Créer</Button>
    </div>
  </Layout>
</template>
