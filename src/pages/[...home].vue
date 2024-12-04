<template>
  <div class="mx-10 my-20 flex flex-col items-center justify-center">
    <form class="inline-grid grid-cols-8">
      <ButtonSquare v-for="i in button_count" :key="i" :ref="el => button_refs.push(el)" />
    </form>
    <button @click="flip" class="flex justify-center gap-x-2 m-5 w-48 p-2 bg-prime-500 text-white rounded-lg">
      <span>Hose umkrempeln</span>
      <ArrowPathIcon class="w-6" />
    </button>
    <button @click="reset" class="flex justify-center gap-x-2 w-48 p-2 bg-second-500 text-white rounded-lg">
      Zurücksetzen
    </button>
  </div>
</template>

<script lang="ts">
import { ArrowPathIcon } from '@heroicons/vue/24/solid'
import { settingsStore } from '~/store/settings';

export default defineComponent({
  components: {
    ArrowPathIcon
  },
  setup() {
    return {
      button_count: 80,
      button_refs: ref([]),
      settings: settingsStore(),
    }
  },
  methods: {
    flip() {
      for (let i = 0; i < this.button_count; i++) {
        this.button_refs[i].flip()
      }
      this.flip_theme()
    },
    flip_theme() {
      this.settings.setTheme(this.settings.theme === 'light' ? 'dark' : 'light')
    },
    reset() {
      for (let i = 0; i < this.button_count; i++) {
        this.button_refs[i].reset()
      }
      this.settings.setTheme('dark')
    }
  }
})
</script>