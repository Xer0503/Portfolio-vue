<script setup>
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

import { selectedIcon } from '../../icon'
import { selectedView } from '../../utils'
import { navToggle } from '../../utils'

const text = ['Home', 'About', 'Achivements', 'Projects', 'Blogs']
const icons = [
  Home, About, Medal, Project, Blog
]
const iconsBLue = [
    HomeBlue, AboutBlue, MedalBlue, ProjectBlue, BlogBlue
]


</script>

<template>
  <section class="flex flex-col p-3  text-white">
        <div>
            <img :src="P" alt="Profile Picture" loading="lazy" class="w-9/12 mx-auto mb-4 rounded-b-full rounded-br-full shadow-lg" />
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
        <li @click="selectedView = 1; navToggle = false" class="flex space-x-2">
            <img :src="icons[0]" alt="icon" class="w-7" />
            <p>{{ text[0] }}</p>
        </li>
        <li @click="selectedView = 2; navToggle = false" class="flex space-x-2">
            <img :src="icons[1]" alt="icon" class="w-7" />
            <p>{{ text[1] }}</p>
        </li>
        <li @click="selectedView = 3; navToggle = false" class="flex space-x-2">
            <img :src="icons[2]" alt="icon" class="w-7" />
            <p>{{ text[2] }}</p>
        </li>
        <li @click="selectedView = 4; navToggle = false" class="flex space-x-2">
            <img :src="icons[3]" alt="icon" class="w-7" />
            <p>{{ text[3] }}</p>
        </li>
        <li @click="selectedView = 5; navToggle = false" class="flex space-x-2">
            <img :src="icons[4]" alt="icon" class="w-7" />
            <p>{{ text[4] }}</p>
        </li>
      </ul>
    </div>

    <div class="flex flex-col p-3 mt-25">
      <!--Darkmode-->
      <div class="flex justify-between items-center text-white bg-gray-600 px-2 py-2 rounded-[10px]">
        <span class="flex space-x-2">
          <span>Icon</span>
          <p>Dark Mode</p>
        </span>
        <span>
          <button>
            on/off
          </button>
        </span>
      </div>
      
      <!--Credentials-->
      <div class="text-white text-[13px] px-2 py-2">
        <p>Design & Built by Rexie Villanueva</p> </br>
        <p>2025, All right reserved.</p>
      </div>
    </div>
    <!--End of Footer-->
  </section>
</template>
