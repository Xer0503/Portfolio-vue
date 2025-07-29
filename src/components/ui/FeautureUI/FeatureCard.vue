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
  <div class="overflow-hidden w-full max-w-full mx-auto">
    <img :src="data.img" alt="Feature Image" class="rounded-2xl w-full h-60 object-right-top md:object-cover" 
    :class="{'md:object-bottom-right' : data.id == 3}"
    />
    <div class="px-4">
      <h2 class="text-xl font-bold mb-1 text-center text-white">{{ data.title }}</h2>
      <p class="text-gray-500 text-sm text-center">{{ data.date }}</p>
    </div>
  </div>
</template>