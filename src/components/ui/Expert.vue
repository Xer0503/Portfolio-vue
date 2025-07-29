<script setup>
import { ref } from 'vue'


const skills = [
  {
    id: 1,
    emoji: '/code.svg',
    title: 'Web Development',
    description: 'I build responsive and dynamic websites using modern frontend tools like Vue.js and Tailwind CSS. For the backend, I use Laravel to manage APIs, authentication, and database interactions.'
  },
  {
    id: 2,
    emoji: '/design.svg',
    title: 'Graphic Design',
    description: 'I create engaging visual content including logos, banners, and UI assets using tools like Adobe Photoshop and Figma to support strong branding and user engagement.'
  },
  {
    id: 3,
    emoji: '/market.svg',
    title: 'Digital Marketing',
    description: 'I utilize SEO strategies, social media engagement, and content marketing to increase online visibility and drive user traffic to digital platforms.'
  },
  {
    id: 4,
    emoji: '/figma.svg',
    title: 'UI / UX Design',
    description: 'I design intuitive interfaces and smooth user experiences by applying design thinking principles and prototyping in Figma and Adobe XD.'
  },
  {
    id: 5,
    emoji: '/data.svg',
    title: 'Data Management',
    description: 'I manage and organize structured data using Laravel with MySQL or SQLite, ensuring data integrity, secure storage, and optimized queries.'
  }
]

const toggles = skills.reduce((acc, skill) => {
  acc[skill.id] = ref(false)
  return acc
}, {})

const icon = [
  { src: '/icons/down.svg', alt: 'down' },
  { src: '/icons/up.svg', alt: 'up' }
]
</script>

<template>
  <section class="text-white relative overflow-hidden">
    <div class="flex space-x-2 px-3">
      <span>Logo</span>
      <p class="font-bold text-2xl">Expertise</p>
    </div>

    <div class="flex flex-col px-[5px]">
      <div v-for="skill in skills" :key="skill.id">
        <a href="#title">
        <div @click="toggles[skill.id].value = !toggles[skill.id].value" class="flex justify-between p-3 cursor-pointer" id="title">
          <div class="flex space-x-2">
            <span>
              <img :src="skill.emoji" :alt="skill.emoji" class="w-5" />
            </span>
            <p class="md:text-sm font-bold">{{ skill.title }}</p>
          </div>
          <transition name="dropUp">
              <span>
                <img :src="toggles[skill.id].value ? icon[1].src : icon[0].src"
                     :alt="toggles[skill.id].value ? icon[1].alt : icon[0].alt"
                     class="w-4" />
              </span>
            </transition>
          </div>
        </a>
        <div class="bg-gray-600 p-[0.3px]"></div>
        <transition name="description">
          <div v-if="toggles[skill.id].value" id="desc" class="text-md text-gray-300 py-2 text-justify">
            {{ skill.description }}
          </div>
        </transition>
        <div class="bg-gray-600 p-[0.3px]"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  h3 {
    font-size: large;
    font-weight: 600;
  }

.description-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.description-enter-to {
  opacity: 1;
  transform: scale(1);
}
.description-enter-active{
  transition: all 0.3s ease;
}

#desc{
  padding: 5px 20px;
}

.dropUp-enter-from {
  opacity: 0;
}
.dropUp-enter-to {
  opacity: 1;
}

.dropUp-enter-active{
  transition: all 0.5s ease;
}
</style>
