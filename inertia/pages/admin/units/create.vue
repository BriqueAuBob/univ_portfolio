<script setup>
import { reactive, computed } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import Layout from '../../../layouts/admin.vue';
import Button from '../../../components/button.vue';
import Input from '../../../components/input.vue';

const form = reactive({
  name: '',
  color: '',
});
const translatedFields = {
  name: 'Nom',
  color: 'Couleur',
};

const submit = async () => {
  try {
    form.color = form.color.replace('#', '');
    await router.post('/admin/units', form);
  } catch (error) {
    console.log('An error occurred while adding the unit of teaching');
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
      <h1 class="mb-4 text-2xl font-semibold">Ajout d'une unité d'enseignements</h1>
    </div>
    <div>
      <div class="mb-2" v-for="(_, field) in form">
        <Input
          :placeholder="`Entrez le ${translatedFields[field].toLowerCase()} de l'unité d'enseignements`"
          :label="translatedFields[field]"
          v-model="form[field]"
          :type="field === 'color' ? 'color' : 'text'"
        />
        <span class="text-sm text-red-400">
          {{ getFieldError(field) }}
        </span>
      </div>
      <Button color="green" class="mt-4 w-full" @click="submit">Ajouter</Button>
    </div>
  </Layout>
</template>
