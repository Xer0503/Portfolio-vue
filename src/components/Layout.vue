<script setup>
import { onMounted, watch } from 'vue'
import { navToggle, selectedView } from '../utils'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Achievments from './pages/Achievments.vue'
import Projects from './pages/Projects.vue'
import Blogs from './pages/Blogs.vue'

import Sidenav from './ui/Sidenav.vue'
import Nav from './ui/Nav.vue'
import SidebarMobile from './ui/SidebarMobile.vue'
import RightSection from './RightSection.vue'

const views = {
  1: Home,
  2: About,
  3: Achievments,
  4: Projects,
  5: Blogs
}

watch(navToggle, (isOpen) => {
  document.body.classList.toggle('overflow-hidden', isOpen)
})

function closeNav() {
  navToggle.value = false
}
</script>

<template>
  <!-- Mobile Top Nav -->
  <div v-if="!navToggle" class="block md:hidden max-h-50 bg-gray-900">
    <Nav />
  </div>

  <!-- Mobile Sidebar -->
  <transition name="slide">
    <div
    v-if="navToggle"
    class="fixed z-50 w-10/12 h-screen bg-gray-700 shadow-lg rounded-r-3xl md:hidden transition-transform duration-300 ease-in-out transform translate-x-0"
    >
        <SidebarMobile />
    </div>
   </transition>


  <!-- Mobile Blur Overlay -->
  <div
    v-if="navToggle"
    @click="closeNav"
    class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
  ></div>

  <!-- Main Layout -->
  <section @click="closeNav" class="w-screen h-screen p-5 overflow-auto">
    <div class="grid grid-cols-12 gap-5">
      <!-- Desktop Sidebar -->
      <div class="hidden col-span-12 bg-gray-800 rounded-2xl md:col-span-3 md:block">
        <Sidenav />
      </div>

      <!-- Main Content + Right Section -->
      <div class="col-span-12 h-screen overflow-y-auto rounded-2xl md:col-span-9">
        <div class="grid grid-cols-12 space-x-3">
          <div class="col-span-12 md:col-span-8">
            <component :is="views[selectedView]" />
          </div>

          <div class="hidden col-span-12 md:col-span-4 md:block">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0%);
  opacity: 1;
}
.slide-enter-active {
  transition: all 0.3s ease;
}

.slide-leave-from {
  transform: translateX(0%);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
</style>
