<script setup>
import { ref, onMounted, watch } from 'vue'
import { selectedView } from '../../utils'
import { navToggle } from '../../utils'

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
  { id: 3, label: 'Achivements', icon: Medal, iconBlue: MedalBlue },
  { id: 4, label: 'Projects', icon: Project, iconBlue: ProjectBlue },
  { id: 5, label: 'Blogs', icon: Blog, iconBlue: BlogBlue }
]
</script>

<template>
  <section class="flex flex-col p-3 text-white">
    <div>
      <img :src="P" alt="Profile Picture" loading="lazy" class="w-9/12 mx-auto mb-4 rounded-full shadow-lg" />
    </div>
    <div class="text-center font-bold">
      <h3 class="text-2xl">Rexie N. Villanueva</h3>
      <h2 class="text-md">FullStack Developer</h2>
    </div>
    <div class="text-center px-8 my-5">
      <button class="w-full py-1 bg-gray-900 rounded-2xl">
        Resume
      </button>
    </div>
  </section>

  <section class="flex flex-col">
    <div class="justify-start px-10 text-white">
      <ul class="space-y-3">
        <li
          v-for="item in navItems"
          :key="item.id"
          @click="selectedView = item.id; navToggle = false"
          class="flex space-x-2 items-center p-2 rounded-lg cursor-pointer"
          :class="{ 'bg-gray-600': selectedView === item.id }"
        >
          <img :src="selectedView === item.id ? item.iconBlue : item.icon" class="w-7" />
          <p>{{ item.label }}</p>
        </li>
      </ul>
    </div>

    <div class="flex flex-col p-3 justify-end mt-5">
      <!-- Dark Mode Toggle -->
      <div class="flex justify-between items-center text-white bg-gray-600 px-3 py-2 rounded-[10px]">
        <span class="flex items-center space-x-2">
          <span>🌓</span>
          <p>Dark Mode</p>
        </span>
        <button @click="dark = !dark" class="px-3 py-1 text-sm bg-gray-800 rounded-full">
          {{ dark ? 'On' : 'Off' }}
        </button>
      </div>

      <!-- Footer -->
      <div class="text-white text-[13px] px-2 py-2 text-center mt-4">
        <p>Design & Built by Rexie Villanueva</p>
        <p>2025, All rights reserved.</p>
      </div>
    </div>
  </section>
</template>

<style>
ul li {
  transition: background 0.3s ease;
}
</style>
