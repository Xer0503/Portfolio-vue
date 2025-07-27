<script setup>
import { watch } from 'vue'
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
    <div class="w-screen md:hidden z-40 bg-gray-900 max-h-50" id="top">
      <Nav />
    </div>

    <!-- Mobile Sidebar Slide-In -->
    <transition name="slide">
      <div
        v-show="navToggle"
        @click="closeNav"
        class="fixed top-0 left-0 z-50 w-10/12 bg-gray-900 shadow-lg rounded-r-3xl md:hidden transition-transform duration-300 ease-in-out"
      >
        <SidebarMobile />
      </div>
    </transition>

    <!-- Mobile Overlay Blur -->
    <div
      v-show="navToggle"
      @click="closeNav"
      class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
    ></div>

    <!-- Desktop View -->
    <section class="grid grid-cols-12 md:gap-x-2 md:h-screen">
      <!-- Sidebar -->
      <div class="hidden md:flex md:col-span-3 bg-gray-900">
        <div class="sticky top-0 w-full">
          <Sidenav />
        </div>
      </div>

      <!-- Main Content Area (Scrollable) -->
      <div class="col-span-12 md:col-span-9 md:overflow-y-auto md:h-screen scroll-smooth py-2">
        <div class="grid grid-cols-12">
          <!-- Main Content Area (left side) -->
          <div
            @click="closeNav"
            :class="[
              'px-2 col-span-12',
              selectedView == 2 ? 'lg:col-span-6' : 'lg:col-span-8'
            ]"
          >
            <component :is="views[selectedView]" />
          </div>

          <!-- Right Section -->
          <div
            class="hidden lg:block"
            :class="[
              selectedView == 2 ? 'col-span-6' : 'col-span-4'
            ]"
          >
            <RightSection />
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<style>
/* Global reset */
html {
  scroll-behavior: auto; /* fallback for Safari */
}

body {
  margin: 0;
}

/* Slide transition */
.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0%);
  opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
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

/* Safari Fix for backdrop blur */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style>