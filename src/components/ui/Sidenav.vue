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

// Dark mode toggle
const dark = ref(true)

/*
onMounted(() => {
  const saved = localStorage.getItem('theme')
  dark.value = saved !== 'light' // default to dark
})

watch(dark, (val) => {
  const html = document.documentElement
  html.classList.toggle('dark', val)
  localStorage.setItem('theme', val ? 'dark' : 'light')
})
*/
// Navigation items
const navItems = [
  { id: 1, label: 'Home', icon: Home, iconBlue: HomeBlue },
  { id: 2, label: 'About', icon: About, iconBlue: AboutBlue },
  { id: 3, label: 'Achievements', icon: Medal, iconBlue: MedalBlue },
  { id: 4, label: 'Projects', icon: Project, iconBlue: ProjectBlue },
  { id: 5, label: 'Blogs', icon: Blog, iconBlue: BlogBlue }
]

function handleNavClick(id) {
  selectedView.value = id
  navToggle.value = false
  selectCareer.value = 0
}
</script>

<template>
  <div class="flex flex-col h-screen bg-white dark:bg-gray-900 text-black dark:text-white rounded-r-3xl">
    <!-- Profile -->
    <section class="px-4 pt-6 shrink-0 text-center">
      <img :src="P" alt="Profile" class="w-35 h-35 mx-auto mb-3 rounded-full shadow-md object-cover" />
      <p class="text-xl font-bold">Rexie Villanueva</p>
      <p class="text-sm text-gray-300">FullStack Developer</p>
      <a
        class="block mt-4 w-[50%] py-2 mx-auto bg-gray-600 hover:bg-gray-700 active:bg-blue-500 rounded-2xl text-white text-sm"
      >
        View Resume
      </a>
    </section>

    <!-- Navigation (scrollable) -->
    <nav class="flex flex-col justify-center h-[35%] w-full md:h-full px-4">
      <ul class="space-y-3">
        <li
          v-for="item in navItems"
          :key="item.id"
          @click="handleNavClick(item.id)"
          class="flex w-[100%] px-3 space-x-2 py-2 rounded-2xl cursor-pointer hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
          :class="{ 'bg-gray-600 scale-105': selectedView === item.id }"
        >
          <img :src="selectedView === item.id ? item.iconBlue : item.icon" class="w-5 h-5 transition-transform duration-300" />
          <span class="text-sm"
          :class="{'text-blue-500 font-semibold transition-colors duration-200':selectedView === item.id}"
          >{{ item.label }}</span>
        </li>
      </ul>
    </nav>

    <!-- Footer (sticky bottom) -->
    <div class="px-4 py-3 shrink-0 space-y-2 h-[35%] flex flex-col items-center justify-center">
      <div class="flex justify-between items-center w-[90%] bg-gray-600 px-3 py-2 rounded-xl text-sm">
        <span class="flex items-center space-x-1">
          <span>🌓</span>
          <span>Dark Mode</span>
        </span>
        <button @click="dark = !dark" class="bg-gray-800 px-3 py-1 rounded-full text-white">
          on
        </button>
      </div>
      <footer class="text-center text-xs text-gray-400">
        <p>Design & Built by Rexie Villanueva</p>
        <p>2025, All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* You can remove this if you use Tailwind transition classes instead */
</style>