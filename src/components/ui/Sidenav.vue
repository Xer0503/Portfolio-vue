<script setup>
import { ref, onMounted, watch } from 'vue'
import { selectedView, navToggle, selectCareer } from '../../utils'

// Icons
import Home from '../../assets/icons/home.svg'
import HomeBlue from '../../assets/icons/home-blue.svg'
import About from '../../assets/icons/profile.svg'
import AboutBlue from '../../assets/icons/profile-blue.svg'
import Medal from '../../assets/icons/medal.svg'
import MedalBlue from '../../assets/icons/medal-blue.svg'
import Project from '../../assets/icons/folder.svg'
import ProjectBlue from '../../assets/icons/folder-blue.svg'
import Blog from '../../assets/icons/blog.svg'
import BlogBlue from '../../assets/icons/blog-blue.svg'
import P from '../../assets/profile.jpg'

// Theme toggle
const dark = ref(true)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') dark.value = false
  if (saved === 'dark') dark.value = true
})

watch(dark, (val) => {
  const html = document.documentElement
  if (val) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})

// Navigation items
const navItems = [
  { id: 1, label: 'Home', icon: Home, iconBlue: HomeBlue },
  { id: 2, label: 'About', icon: About, iconBlue: AboutBlue },
  { id: 3, label: 'Achievements', icon: Medal, iconBlue: MedalBlue },
  { id: 4, label: 'Projects', icon: Project, iconBlue: ProjectBlue },
  { id: 5, label: 'Blogs', icon: Blog, iconBlue: BlogBlue }
]

// Wrapper functions for actions
function handleNavClick(id) {
  selectedView.value = id
  navToggle.value = false
  selectCareer.value = 0
}
</script>

<template>
  <div class="flex flex-col h-screen">
    <section class="flex flex-col px-2 pt-2 text-white">
      <div>
        <img :src="P" alt="Profile Picture" loading="lazy" class="w-9/12 md:w-30 mx-auto mb-4 rounded-full shadow-lg" />
      </div>
      <div class="text-center font-bold">
        <p class="text-2xl md:text-md font-bold">Rexie Villanueva</p>
        <p class="md:text-sm">FullStack Developer</p>
      </div>
      <div class="text-center px-8 my-5">
        <button class="w-full py-1 bg-gray-600 rounded-2xl">
          Resume
        </button>
      </div>
    </section>
    <div class="px-5 text-white">
      <ul class="md:space-y-5">
        <a href="#top">
          <li
            v-for="item in navItems"
            :key="item.id"
            @click="handleNavClick(item.id)"
            class="flex space-x-2 space- items-center px-2 py-[5px] md:py-1  rounded-lg cursor-pointer"
            :class="{ 'bg-gray-600': selectedView === item.id }"
          >
            <div class="flex space-x-2 justify-center py-2 items-center">
              <img :src="selectedView === item.id ? item.iconBlue : item.icon" class="w-5 md:w-4 my-auto" />
              <p class="text-md md:text-sm">{{ item.label }}</p>
            </div>
          </li>
        </a>
      </ul>
    </div>

    <div class="flex flex-col px-5 w-full md:h-screen justify-end mt-5">
      <!-- Dark Mode Toggle -->
      <div class="flex justify-between text-white bg-gray-600 px-3 py-2 md:py-[3px] rounded-[10px]">
        <span class="flex items-center">
          <span>🌓</span>
          <p>Dark Mode</p>
        </span>
        <button @click="dark = !dark" class="px-3 py-1 text-sm bg-gray-800 rounded-full">
          {{ dark ? 'On' : 'Off' }}
        </button>
      </div>
      <!-- Footer -->
      <div class="text-white text-[13px] text-center py-2">
        <p>Design & Built by Rexie Villanueva</p>
        <p>2025, All rights reserved.</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
ul li {
  transition: background 0.3s ease;
}
</style>