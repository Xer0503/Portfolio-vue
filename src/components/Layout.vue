<script setup>
import { onMounted, watch } from 'vue'
import { navToggle, selectedView } from '../utils'

// Page Components
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Achievments from './pages/Achievments.vue'
import Projects from './pages/Projects.vue'
import Blogs from './pages/Blogs.vue'

// UI Components
import Sidenav from './ui/Sidenav.vue'
import Nav from './ui/Nav.vue'
import SidebarMobile from './ui/SidebarMobile.vue'
import RightSection from './RightSection.vue'

// Page view map
const views = {
  1: Home,
  2: About,
  3: Achievments,
  4: Projects,
  5: Blogs
}

// Lock body scroll on mobile nav open
watch(navToggle, (isOpen) => {
  document.body.classList.toggle('overflow-hidden', isOpen)
})

// Close nav handler
function closeNav() {
  navToggle.value = false
}
</script>

<template>
  <div class="relative overflow-hidden">

    <!-- Top Nav (Mobile Only) -->
    <div class="w-screen fixed md:hidden z-40 bg-gray-900 max-h-50">
      <Nav />
    </div>

    <!-- Mobile Sidebar Slide-In -->
    <transition name="slide">
      <div
        v-on:click="closeNav"
        v-if="navToggle"
        class="fixed top-0 left-0 z-50 w-10/12 opacity-70 bg-gray-900 shadow-lg rounded-r-3xl md:hidden transition-transform duration-300 ease-in-out"
      >
        <SidebarMobile />
      </div>
    </transition>

    <!-- Mobile Overlay Blur -->
    <div
      v-if="navToggle"
      @click="closeNav"
      class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
    ></div>

    <!-- Main Layout -->
    <section @click="closeNav" class="px-2 py-2 overflow-auto mt-15 md:mt-0">
      <div class="grid grid-cols-12 gap-3">

        <!-- Sidebar (Desktop Only) -->
        <div class="hidden md:block md:col-span-3 bg-gray-900 rounded-2xl">
          <Sidenav />
        </div>

        <!-- Main Content Area -->
        <div class="col-span-12 md:col-span-9 px-2 overflow-y-auto scroll-smooth">
          <component :is="views[selectedView]" />
        </div>

      </div>
    </section>
  </div>
</template>

<style>

html {
  scroll-behavior: smooth;
}

/* Sidebar slide transition */
.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0%);
  opacity: 0.7;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-leave-from {
  transform: translateX(0%);
  opacity: 0.7;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
