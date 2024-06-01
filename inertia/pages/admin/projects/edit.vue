<script setup>
import { reactive, computed, watch } from 'vue';
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
  name: props.project?.name,
  description: props.project?.description,
  content: props.project?.content,
  image: '',
  courseId: props.project?.courseId,
  createdAt: new Date(props.project?.createdAt).toISOString().split('T')[0],
  customTexts: props.project?.customTexts?.reduce((acc, customText) => {
    acc[customText.unitId] = customText;
    if (acc[customText.unitId].text === null) acc[customText.unitId].text = '';
    return acc;
  }, {}),
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
    await router.put(
      '/admin/projects/' + props.project?.id,
      {
        ...form,
        customTexts: parseArrayFormCustomTexts(),
      },
      {
        forceFormData: true,
      }
    );
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

const selectedCourse = computed(() => {
  return fieldValues.courseId.find((course) => course.id === form.courseId);
});

watch(
  () => form.courseId,
  (newValue) => {
    if (!newValue) return;
    form.customTexts = selectedCourse.value?.units.reduce((acc, unit) => {
      const searchCustomTextId = props.project.customTexts?.find?.((customText) => customText.unitId === unit.id);
      console.log(searchCustomTextId, form.customTexts);
      acc[unit.id] = {
        unitId: unit.id,
        text: searchCustomTextId ? searchCustomTextId.text : '',
      };
      return acc;
    }, {});
  },
  { immediate: true }
);

const parseArrayFormCustomTexts = () => {
  return Object.values(form.customTexts);
};
</script>

<template>
  <Layout>
    <div class="flex items-center justify-between">
      <h1 class="mb-4 text-2xl font-semibold">Modification d'un projet</h1>
    </div>
    <div>
      <div class="mb-2" v-for="(_, field) in form">
        <div v-if="field !== 'customTexts'">
          <Input
            :placeholder="`Entrez le ${translatedFields[field]?.toLowerCase()} du projet`"
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
            <option disabled :selected="!form.courseId">Choisissez une matière</option>
            <option v-for="course in fieldValues[field]" :key="course.id" :value="course.id" :selected="course.id === form.courseId">
              {{ course.code }} - {{ course.title }}
            </option>
          </select>
          <tiptap class="mt-4" v-model="form.content" v-else />
          <span class="text-sm text-red-400">
            {{ getFieldError(field) }}
          </span>
        </div>
      </div>
      <progress v-if="form.progress" :value="form.progress.percentage" max="100">{{ form.progress.percentage }}%</progress>
      <hr class="my-4 border-neutral-200 dark:border-neutral-700" />
      <h1>Ajout de textes personnalisés par unité d'enseignement</h1>
      <div v-for="unit in selectedCourse.units" :key="unit.id" class="py-4" v-if="selectedCourse">
        <h2 class="text-lg font-medium">{{ unit.name }}</h2>
        <tiptap
          v-if="form.customTexts[unit.id]"
          :placeholder="`Entrez le texte personnalisé pour l'unité d'enseignement ${unit.name}`"
          :label="`Texte personnalisé pour l'unité d'enseignement ${unit.name}`"
          v-model="form.customTexts[unit.id].text"
        />
      </div>
      <Button color="green" class="mt-4 w-full" @click="submit">Modifier</Button>
    </div>
  </Layout>
</template>
