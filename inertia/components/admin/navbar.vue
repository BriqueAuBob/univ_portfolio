<script setup>
import { Link } from '@inertiajs/vue3';

const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/units', label: "Unités d'enseignements" },
  { href: '/admin/courses', label: 'Matières' },
  { href: '/admin/projects', label: 'Projets' },
];
</script>

<template>
  <nav class="bg-zinc-800">
    <div class="container py-4">
      <div class="flex items-center justify-between">
        <Link :href="links[0]?.href" class="text-2xl font-semibold text-white"> Brandon Clément </Link>
        <div class="hidden items-center gap-2 md:flex">
          <Link
            v-for="link in links"
            :href="link.href"
            class="rounded-lg px-2 py-1 text-white duration-200 ease-in hover:bg-zinc-500"
            :class="$page.url === link.href && 'bg-zinc-500'"
          >
            {{ link.label }}
          </Link>
        </div>
      </div>
    </div>
  </nav>
</template>
