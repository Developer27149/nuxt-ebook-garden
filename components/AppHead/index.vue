<template>
  <div class="flex items-center justify-center p-4">
    <div class="mx-auto max-w-screen w-[1200px] flex items-center">
      <div class="flex items-center">
        <span class="opacity-80"> eBooks </span>
        <span> Garden </span>
      </div>
    </div>

    <div
      class="flex items-center border rounded-sm bg-gray-800 pl-1 text-black text-white shadow-sm"
    >
      <button
        class="flex cursor-pointer border-none bg-gray-800 px-.5 text-white"
      >
        <v-icon class="i-mdi:magnify" />
      </button>
      <input
        class="w-[200px] border-(none) bg-gray-800 p-2 text-white focus:outline-none"
        placeholder="Search Books"
      >
    </div>
    <UIAvatar
        class-name="ml-1"
        src="https://cdn.dribbble.com/users/7044840/avatars/normal/e261f72c3d99846e07de814e1adc8b98.jpg?1628595466"
      />
  
  </div>
</template>

<script setup lang="ts">
</script>
