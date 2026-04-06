<template>
  <div class="mx-4 my-10 flex flex-row justify-center">
    <Card
      title="Impressum"
      :icon="IdentificationIcon"
      class="w-full align-middle sm:w-1/2"
    >
      <p>Angaben gemäß § 5 TMG</p>
      <p>{{ impressum.name }}</p>

      <p>
        <b>Kontakt:</b><br />
        E-Mail: {{ impressum.email }}<br />
      </p>
    </Card>
  </div>
</template>

<script lang="ts">
import { IdentificationIcon } from '@heroicons/vue/24/outline';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'privacy',
  methods: {
    IdentificationIcon,
  },
  data() {
    return {
      impressum: {
        name: 'Elias Lorenz Schaut',
        email: 'elias@schaut.dev',
      },
    };
  },
});
</script>
