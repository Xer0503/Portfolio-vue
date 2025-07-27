<!-- components/Carousel.vue -->
<script setup>
import { ref } from 'vue'
import { feature } from '../../utils/feature'
import FeatureCard from './FeautureUI/FeatureCard.vue'

const currentIndex = ref(0)

function next() {
  currentIndex.value = (currentIndex.value + 1) % feature.length
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + feature.length) % feature.length
}
</script>

<template>
  <div class="relative w-full flex flex-col items-center overflow-hidden rounded-2xl">
    <div
    class="flex transition-transform duration-300 ease-in-out"
    :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
        <FeatureCard
            v-for="item in feature"
            :key="item.id"
            :data="item"
            class="min-w-full"
        />
    </div>
    <div class="flex flex-col">
        <div class="flex space-x-3 justify-center">
            <div
            :class="[
              'w-3 rounded h-3 transition-transform duration-300',
              currentIndex == 0 ? 'bg-blue-600' : 'bg-white'
            ]"></div>
            <div 
              :class="[
              'w-3 rounded h-3 transition-transform duration-300',
              currentIndex == 1 ? 'bg-blue-600' : 'bg-white'
            ]"></div>
            <div
            :class="[
              'w-3 rounded h-3 transition-transform duration-300',
              currentIndex == 2 ? 'bg-blue-600' : 'bg-white'
            ]"></div>
        </div>
        <div class="flex gap-4 py-2">
            <button @click="prev" class="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-blue-600 active:bg-blue-600">
              <img src="/feature/prev.svg" alt="prev" class="w-5" />
            </button>
            <button @click="next" class="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-blue-600 active:bg-blue-600">
              <img src="/feature/next.svg" alt="next" class="w-5" />
            </button>
        </div>
    </div>
  </div>
</template>
