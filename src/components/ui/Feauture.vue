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
    <div class="absolute inset-0">
      <div class="flex justify-between px-1 py-2 w-full h-full">
          <div class="h-full flex justify-center">
            <button @click="prev" class="text-white px-4 py-2 rounded-full">
              <img src="/feature/prev.svg" alt="prev" class="w-10 px-2 py-2 rounded-full" 
              />
            </button>
          </div>
          <div class="h-full flex justify-center">
            <button @click="next" class="text-white px-4 py-2">
              <img src="/feature/next.svg" alt="next" class="w-10 px-2 py-2 rounded-full" 
              />
            </button>
          </div>
      </div>
    </div>
    <div class="flex flex-col py-3">
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
    </div>
  </div>
</template>
