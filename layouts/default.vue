<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-gray-50">
    <AppHead />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="css">
body {
  padding: 0;
  margin: 0;
}
</style>
