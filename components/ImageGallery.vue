<script setup lang="ts">
const { data: images, refresh } = await useFetch('/api/images')

async function uploadImage (e: Event) {
  const form = e.target as HTMLFormElement
  await $fetch('/api/images/upload', {
    method: 'POST',
    body: new FormData(form)
  }).catch((err) => alert('Failed to upload image:\n'+ err.data?.message))
  form.reset()
  await refresh()
}

async function deleteImage (pathname: string) {
  await $fetch(`/api/images/${pathname}`, { method: 'DELETE' })
  await refresh()
}
</script>

<template>
  <div>
    <h3 class="hover:bg-gray-400 hover:font-medium font-light font-mono">Images</h3>
    <form @submit.prevent="uploadImage">
      <label class="text-red-400">Upload an image: <input type="file" name="image"></label>
      <button type="submit">
        Upload
      </button>
    </form>
    <p>
      <img v-for="image of images" :key="image.pathname" width="200" :src="`/images/${image.pathname}`"
        :alt="image.pathname" @dblclick="deleteImage(image.pathname)">
    </p>
    <p v-if="images?.length">
      <i>Tip: delete an image by double-clicking on it.</i>
    </p>
  </div>
</template>
