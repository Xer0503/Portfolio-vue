<script setup>
import { ref, onMounted } from 'vue'

// Typing text
const fullText = 'Welcome to my codebase'
const displayedText = ref('')

// Sleep helper
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Typing animation
async function typeText() {
  for (let i = 0; i <= fullText.length; i++) {
    displayedText.value = fullText.slice(0, i)
    await sleep(150)
  }
}

onMounted(() => {
  typeText()
})
</script>

<template>
  <div class="relative h-[40vh] rounded-2xl overflow-hidden text-white" id="top">

    <!-- Background image -->
    <div class="absolute inset-0 z-10 bg-center bg-cover bg-no-repeat bg-[url('/bg.jpg')]"></div>

    <!-- Black overlay -->
    <div class="absolute inset-0 z-20 bg-black/60"></div>

    <!-- Typing text centered -->
    <div class="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
      <p class="text-3xl md:text-5xl font-bold font-serif drop-shadow-xl">
        {{ displayedText }}<span class="text-white animate-pulse">|</span>
      </p>
    </div>
    
  </div>
</template>