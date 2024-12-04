<template>
  <input
    type="checkbox"
    @click="flip"
    :class="[
      'h-8 w-8 appearance-none border-2 z-1 border-second-600 hover:cursor-pointer',
      checked ? 'bg-blue-800' : 'bg-white'
    ]"
  />
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    return {
      checked: ref(true),
    };
  },
  methods: {
    flip() {
      this.checked = !this.checked;
    },
    reset() {
      this.checked = true;
    },
  },
});
</script>
