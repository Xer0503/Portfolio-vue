<!-- components/FeatureCard.vue -->
<script setup>
const { data } = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="rounded-xl overflow-hidden w-full max-w-full mx-auto">
    <img :src="data.img" alt="Feature Image" class="w-full h-50 object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-bold mb-1 text-white">{{ data.title }}</h2>
      <p class="text-gray-500 text-sm">{{ data.date }}</p>
    </div>
  </div>
</template>