<script setup>
import { Link } from '@inertiajs/vue3';
import SwitchTheme from '../switchTheme.vue';

const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/units', label: "Unités d'enseignements" },
  { href: '/admin/courses', label: 'Matières' },
  { href: '/admin/projects', label: 'Projets' },
];
</script>

<template>
  <nav class="bg-neutral-100 dark:bg-neutral-800">
    <div class="container py-4">
      <div class="flex items-center justify-between">
        <Link :href="links[0]?.href" class="text-2xl font-semibold"> Brandon Clément </Link>
        <div class="hidden items-center gap-2 md:flex">
          <Link
            v-for="link in links"
            :href="link.href"
            class="rounded-lg px-2 py-1 duration-200 ease-in hover:bg-neutral-600 hover:text-white"
            :class="$page.url === link.href && 'bg-neutral-600 text-white'"
          >
            {{ link.label }}
          </Link>
          <SwitchTheme />
        </div>
      </div>
    </div>
  </nav>
</template>
