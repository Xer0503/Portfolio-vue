<script setup>
import Bg from '../../assets/icons/bg.jpg'
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
        <p class="text-2xl font-bold font-serif text-center text-amber-300">Welcome to my Codebase</p>
    </div>
  </div>
</template>