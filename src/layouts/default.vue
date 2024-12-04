<template>
  <Body
    class="bg-second-50 text-second-900 dark:text-white selection:bg-prime-100 dark:bg-second-900 dark:selection:bg-prime-900"
  />
  <div class="flex flex-col h-screen justify-between">
    <LayoutNav />
      <main class="mb-auto bg-[url('/img/jeans.png')] bg-contain bg-no-repeat bg-center">
        <slot />
      </main>
    <LayoutFooter />
  </div>
</template>

<style>
a {
  @apply hover:underline
}
</style>
