<template>
  <div class="rounded-xl border border-neutral-400 p-4 dark:bg-neutral-800">
    <ul v-if="editor" class="mb-2 flex flex-wrap items-center gap-1 rounded-xl bg-neutral-100 p-2 dark:bg-neutral-700">
      <li v-for="button in buttons" :key="button.name">
        <button
          @click="button.action"
          :class="{
            'bg-blue-500  text-white': editor?.isActive(button.code, button.attributes),
            'rounded-lg px-2 py-1 duration-200 hover:bg-blue-400 focus:bg-blue-600': true,
          }"
        >
          {{ button.name }}
        </button>
      </li>
    </ul>
    <bubble-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
      <ul class="mb-2 flex flex-wrap items-center gap-1 rounded-xl border border-neutral-400 p-2 backdrop-blur-md dark:bg-neutral-600/50">
        <li v-for="button in buttons" :key="button.name">
          <button
            @click="button.action"
            :class="{
              'bg-blue-500  text-white': editor?.isActive(button.code, button.attributes),
              'rounded-lg px-2 py-1 duration-200 hover:bg-blue-400 focus:bg-blue-600': true,
            }"
          >
            {{ button.name }}
          </button>
        </li>
      </ul>
    </bubble-menu>
    <editor-content :editor="editor" class="w-full" />
    <div class="mt-4 text-neutral-400 dark:text-neutral-500">
      {{ editor?.storage?.characterCount?.characters() }} caractères / {{ editor?.storage?.characterCount?.words() }} mots
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/vue-3';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import CharacterCount from '@tiptap/extension-character-count';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
// @ts-ignore
import Iframe from '../libs/tiptap/extensions/iframe';

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Underline,
    Image.configure({
      HTMLAttributes: {
        loading: 'lazy',
        class: 'w-full rounded-2xl shadow-sm',
      },
    }),
    CharacterCount,
    Link,
    Iframe,
  ],
  editorProps: {
    attributes: {
      class:
        'mx-auto pr-4 prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg prose-neutral focus:outline-none min-h-48 max-h-96 overflow-y-auto w-full',
    },
  },
  onUpdate: () => {
    emit('update:modelValue', editor?.value?.getHTML());
  },
});

const buttons = [
  {
    name: 'Gras',
    code: 'bold',
    action: () => editor?.value?.chain().focus().toggleBold().run(),
  },
  {
    name: 'Italique',
    code: 'italic',
    action: () => editor.value?.chain().focus().toggleItalic().run(),
  },
  {
    name: 'Souligné',
    code: 'underline',
    action: () => editor.value?.chain().focus().toggleUnderline().run(),
  },
  {
    name: 'Barré',
    code: 'strike',
    action: () => editor.value?.chain().focus().toggleStrike().run(),
  },
  {
    name: 'Titre 1',
    code: 'heading',
    attributes: {
      level: 1,
    },
    action: () => editor.value?.chain().focus().toggleHeading({ level: 1 }).run(),
  },
  {
    name: 'Titre 2',
    code: 'heading',
    attributes: {
      level: 2,
    },
    action: () => editor.value?.chain().focus().toggleHeading({ level: 2 }).run(),
  },
  {
    name: 'Titre 3',
    code: 'heading',
    attributes: {
      level: 3,
    },
    action: () => editor.value?.chain().focus().toggleHeading({ level: 3 }).run(),
  },
  {
    name: 'Liste à puces',
    code: 'bulletList',
    action: () => editor.value?.chain().focus().toggleBulletList().run(),
  },
  {
    name: 'Liste numérotée',
    code: 'orderedList',
    action: () => editor.value?.chain().focus().toggleOrderedList().run(),
  },
  {
    name: 'Citation',
    code: 'blockquote',
    action: () => editor.value?.chain().focus().toggleBlockquote().run(),
  },
  {
    name: 'Lien',
    code: 'link',
    action: () => {
      const url = window.prompt('URL');
      if (!url) return;
      editor.value?.chain().focus().extendMarkRange('link').toggleLink({ href: url }).run();
    },
  },
  {
    name: 'Code',
    code: 'code',
    action: () => editor.value?.chain().focus().toggleCode().run(),
  },
  {
    name: 'Code en ligne',
    code: 'code',
    action: () => editor.value?.chain().focus().toggleCodeBlock().run(),
  },
  {
    name: 'Image',
    code: 'image',
    action: () => {
      const url = window.prompt('URL');
      if (!url) return;
      editor.value?.chain().focus().setImage({ src: url }).run();
    },
  },
  {
    name: 'Iframe',
    code: 'iframe',
    action: () => {
      const url = window.prompt('URL');
      if (!url) return;
      // @ts-ignore
      editor.value?.chain().focus().setIframe({ src: url }).run();
    },
  },
];
</script>
../libs/tiptap/iframe
