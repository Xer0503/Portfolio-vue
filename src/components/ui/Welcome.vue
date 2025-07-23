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
  <div
    class="bg-cover bg-center flex flex-col h-full text-white justify-between py-8 px-5 rounded-2xl"
    :style="{ backgroundImage: `url(${Bg})` }"
  >
    <div>
        Date
    </div>
    <div class="mb-2">
        <p class="text-3xl font-bold font-serif text-center text-white text-shadow-black">{{ displayedText }}<span class="animate-pulse">|</span></p>
    </div>
  </div>
</template>