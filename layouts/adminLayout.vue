<template>
  <div class="grid grid-cols-[64px_auto] h-screen w-screen">
    <div class="flex flex-col justify-between bg-gray-900">
      <div
        class="flex flex-col items-center justify-center gap-1 p-8 text-white"
      >
        <img
          src="https://avatars.githubusercontent.com/u/23721611?s=48&v=4"
          class="h-[36px] w-[36px] rounded-full"
        >
      </div>
      <nav class="aside-nav">
        <router-link to="/admin" class="">
          <v-icon class="i-carbon:dashboard-reference" />
        </router-link>
        <router-link to="/admin/books" class="">
          <v-icon class="i-carbon:notebook" />
        </router-link>
        <router-link to="/admin/authors" class="">
          <v-icon class="i-carbon:category-add" />
        </router-link>
        <router-link to="/admin/tags" class="">
          <v-icon class="i-carbon:trash-can" />
        </router-link>
      </nav>
      <RouterLink to="/" class="mx-auto mb-8 text-green-50" >
        <v-icon class="i-carbon:logout" />
      </RouterLink>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

.aside-nav {
  @apply flex flex-col gap-2 p-1;
  a {
    @apply flex items-center justify-center transition-all duration-500 rounded-sm p-2 text-gray-100 decoration-none opacity-80 rounded-sm;
    &:hover {
      @apply bg-gray-800 opacity-100 text-green-400;
    }
  }
  .router-link-active {
    font-weight: 600;
    opacity: 1;
    @apply text-green-500 scale-115;
  }
}
</style>
