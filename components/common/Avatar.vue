<template>
  <div
    :class="avatarClass"
    :style="{
      maxWidth: props.size,
      minWidth: props.size,
      minHeight: props.size,
      maxHeight: props.size,
    }"
  >
    <img :src="src" class="h-full w-full" @loaded="loaded = true" >
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string;
    size?: string;
    shape?: "circle" | "rounded" | "square";
    className?: string;
  }>(),
  {
    size: "24px",
    shape: "circle",
    className: "",
  }
);
const loaded = ref(false);
const avatarClass = computed(() => {
  return cn(
    {
      "rounded-full": props.shape === "circle",
      "rounded-lg": props.shape === "rounded",
      "rounded-none": props.shape === "square",
    },
    "flex items-center justify-center bg-gray-50 overflow-hidden border",
    props.className
  );
});
</script>
