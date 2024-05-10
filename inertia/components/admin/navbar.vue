<script setup>
import { Link } from '@inertiajs/vue3'

const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/units', label: "Unités d'enseignements" },
  { href: '/admin/courses', label: 'Matières' },
  { href: '/admin/projects', label: 'Projets' },
]
</script>

<template>
  <nav class="bg-zinc-800">
    <div class="container py-4">
      <div class="flex justify-between items-center">
        <Link :href="links[0]?.href" class="text-white text-2xl font-semibold">
          Brandon Clément
        </Link>
        <div class="hidden items-center gap-2 md:flex">
          <Link
            v-for="link in links"
            :href="link.href"
            class="text-white px-2 py-1 rounded-lg ease-in duration-200 hover:bg-zinc-500"
            :class="$page.url === link.href && 'bg-zinc-500'"
          >
            {{ link.label }}
          </Link>
        </div>
      </div>
    </div>
  </nav>
</template>
