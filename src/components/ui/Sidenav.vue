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

import { selectedIcon } from '../../icon'

const text = ['Home', 'About', 'Achivements', 'Projects', 'Blogs']
const icons = [
  Home, About, Medal, Project, Blog
]
const iconsBLue = [
    HomeBlue, AboutBlue, MedalBlue, ProjectBlue, BlogBlue
]


</script>

<template>
  <section class="flex flex-col">
    <div class="justify-start px-10 text-white">
      <ul class="space-y-3">
        <li class="flex space-x-2">
            <img :src="icons[0]" alt="icon" class="w-7" />
            <p>{{ text[0] }}</p>
        </li>
        <li class="flex space-x-2">
            <img :src="icons[1]" alt="icon" class="w-7" />
            <p>{{ text[1] }}</p>
        </li>
        <li class="flex space-x-2">
            <img :src="icons[2]" alt="icon" class="w-7" />
            <p>{{ text[2] }}</p>
        </li>
        <li class="flex space-x-2">
            <img :src="icons[3]" alt="icon" class="w-7" />
            <p>{{ text[3] }}</p>
        </li>
        <li class="flex space-x-2">
            <img :src="icons[4]" alt="icon" class="w-7" />
            <p>{{ text[4] }}</p>
        </li>
      </ul>
    </div>
    <div>Footer</div>
  </section>
</template>
