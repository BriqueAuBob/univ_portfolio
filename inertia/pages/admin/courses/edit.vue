<script setup>
import { reactive, computed } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import Layout from '../../../layouts/admin.vue';
import Button from '../../../components/button.vue';
import Input from '../../../components/input.vue';

const props = defineProps({
  course: Object,
  units: Array,
});

const fieldValues = {
  units: props.units,
};
const form = reactive({
  code: props.course?.code,
  title: props.course?.title,
  units: props.course?.units.map((unit) => unit.id),
});
const translatedFields = {
  title: 'Nom',
  code: 'Code',
  units: "Unités d'enseignement",
};

const submit = async () => {
  try {
    await router.put('/admin/courses/' + props.course?.id, form);
  } catch (error) {
    console.log('An error occurred while updating the course', error);
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
      <h1 class="mb-4 text-2xl font-semibold">Modification d'un projet</h1>
    </div>
    <div>
      <div class="mb-2" v-for="(_, field) in form">
        <Input
          :placeholder="`Entrez le ${translatedFields[field].toLowerCase()} du projet`"
          :label="translatedFields[field]"
          v-model="form[field]"
          v-if="field !== 'content' && field !== 'image' && !fieldValues[field]"
        />
        <input class="mt-4" type="file" @input="form.image = $event.target.files[0]" v-else-if="field === 'image'" />
        <select
          v-model="form.units"
          v-else-if="fieldValues[field]"
          class="mt-4 w-full rounded-xl border border-neutral-300 bg-white p-4 focus:border-neutral-200 focus:outline-none dark:border-zinc-500 dark:bg-zinc-700"
          multiple
        >
          <option disabled :selected="!form.courseId">Choisissez une matière</option>
          <option v-for="unit in fieldValues[field]" :key="unit.id" :value="unit.id" :selected="form.units?.includes(unit.id)">
            {{ unit.name }}
          </option>
        </select>
        <tiptap class="mt-4" v-model="form.content" v-else />
        <span class="text-sm text-red-400">
          {{ getFieldError(field) }}
        </span>
      </div>
      {{ form.units }}
      <progress v-if="form.progress" :value="form.progress.percentage" max="100">{{ form.progress.percentage }}%</progress>
      <Button color="green" class="mt-4 w-full" @click="submit">Modifier</Button>
    </div>
  </Layout>
</template>
