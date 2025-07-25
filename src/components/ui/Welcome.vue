<script setup>
    import Bg from '../../assets/icons/bg.jpg'
    import { ref, onMounted } from 'vue'

    const fullText = 'Welcome to my codebase'
    const displayedText = ref('')

    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function typeText() {
    for (let i = 0; i <= fullText.length; i++) {
        displayedText.value = fullText.slice(0, i)
        await sleep(200)
        }
    }

    onMounted(() => {
        typeText()
    })

</script>

<template>
  <div class="relative h-full">
    <div class="bg-black opacity-50 absolute inset-0 z-20 rounded-2xl"></div>
    <div class="bg-cover absolute inset-0 z-10 bg-center flex flex-col h-full text-white justify-between py-8 px-5 rounded-2xl bg-[url('/bg.jpg')]">
    </div>
    <div class="absolute my-auto z-25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p class="text-3xl font-bold font-serif text-center text-white text-shadow-2xl">{{ displayedText }}<span class="animate-pulse">|</span></p>
    </div>
  </div>
</template>