<template>
  <div>
    <div class="flex flex-wrap justify-center gap-4">
      <div
        v-for="book in data"
        :key="book.id"
        class="group w-[400px] flex flex-col border border-green-200/50 rounded-sm border-solid transition-colors hover:border-green-400"
      >
     
        <div class="h-[220px] overflow-hidden">
          <img
          :src="book?.images?.medium"
          :alt="book?.title ?? ''"
          :title="book?.title ?? ''"
          class="h-[220px] w-full rounded-t-sm object-cover transition-all transition-duration-500 group-hover:scale-105"
        >
        </div>
        <div class="flex flex-col gap-1 p-2">
          <h3>{{ book.title }}</h3>
          <section class="opacity-80 hover:text-blue-500 hover:opacity-100">{{ book.author?.join(',') }}</section>
          <div class="my-2 flex gap-1">
            <span v-for="tag in book.tags" :key="tag" class="rounded-sm bg-gray-500/40 p-[2px] text-sm text-white">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { data } = await useFetch('/api/ebooks', {
  query: {
    page: 2
  }
});
</script>
