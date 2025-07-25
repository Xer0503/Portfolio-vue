<script setup>
import { ref } from 'vue'


const toggles = {
    1 : ref(false),
    2 : ref(false),
    3 : ref(false),
    4 : ref(false),
    5 : ref(false)
}


</script>

<template>
  <section class="text-white relative overflow-hidden">
    <!--Head Card-->
    <div class="flex space-x-2 px-3 py-2">
      <span>Logo</span>
      <p class="font-bold text-2xl">Expertise</p>
    </div>

    <!--Body Card-->
    <div class="flex flex-col px-5 py-3">

      <!-- Web Development -->
      <div @click="toggles[1].value = !toggles[1].value" class="flex justify-between p-3">
        <div class="flex space-x-2 cursor-pointer">
          <span>🌐</span>
          <h3> Web Development </h3>
        </div>
        <span>▼</span>
      </div>
      <div class="bg-gray-600 p-[0.3px]"></div>
      <transition name="description">
        <div v-if="toggles[1].value" class="text-md text-gray-300 py-2 text-justify">
          I build responsive and dynamic websites using modern frontend tools like Vue.js and Tailwind CSS. For the backend, I use Laravel to manage APIs, authentication, and database interactions.
        </div>
      </transition>
      <div class="bg-gray-600 p-[0.3px]"></div>

      <!-- Graphic Design -->
      <div @click="toggles[2].value = !toggles[2].value" class="flex justify-between p-3">
        <div class="flex space-x-2 cursor-pointer">
          <span>🎨</span>
          <h3> Graphic Design </h3>
        </div>
        <span>▼</span>
      </div>
      <div class="bg-gray-600 p-[0.3px]"></div>
      <transition name="description">
        <div v-if="toggles[2].value" class="text-md text-gray-300 py-2 text-justify">
          I create engaging visual content including logos, banners, and UI assets using tools like Adobe Photoshop and Figma to support strong branding and user engagement.
        </div>
      </transition>
      <div class="bg-gray-600 p-[0.3px]"></div>

      <!-- Digital Marketing -->
      <div @click="toggles[3].value = !toggles[3].value" class="flex justify-between p-3">
        <div class="flex space-x-2 cursor-pointer">
          <span>📈</span>
          <h3> Digital Marketing </h3>
        </div>
        <span>▼</span>
      </div>
      <div class="bg-gray-600 p-[0.3px]"></div>
      <transition name="description">
        <div v-if="toggles[3].value" class="text-md text-gray-300 py-2 text-justify">
          I utilize SEO strategies, social media engagement, and content marketing to increase online visibility and drive user traffic to digital platforms.
        </div>
      </transition>
      <div class="bg-gray-600 p-[0.3px]"></div>

      <!-- UI / UX Design -->
      <div @click="toggles[4].value = !toggles[4].value" class="flex justify-between p-3">
        <div class="flex space-x-2 cursor-pointer">
          <span>🧠</span>
          <h3> UI / UX Design </h3>
        </div>
        <span>▼</span>
      </div>
      <div class="bg-gray-600 p-[0.3px]"></div>
      <transition name="description">
        <div v-if="toggles[4].value" class="text-md text-gray-300 py-2 text-justify">
          I design intuitive interfaces and smooth user experiences by applying design thinking principles and prototyping in Figma and Adobe XD.
        </div>
      </transition>
      <div class="bg-gray-600 p-[0.3px]"></div>

      <!-- Data Management -->
      <div @click="toggles[5].value = !toggles[5].value" class="flex justify-between p-3">
        <div class="flex space-x-2 cursor-pointer">
          <span>🗃</span>
          <h3> Data Management </h3>
        </div>
        <span>▼</span>
      </div>
      <div class="bg-gray-600 p-[0.3px]"></div>
      <transition name="description">
        <div v-if="toggles[5].value" class="text-md text-gray-300 py-2 text-justify">
          I manage and organize structured data using Laravel with MySQL or SQLite, ensuring data integrity, secure storage, and optimized queries.
        </div>
      </transition>
      <div class="bg-gray-600 p-[0.3px]"></div>
    </div>

  </section>
</template>

<style scoped>
  h3 {
    font-size: large;
    font-weight: 600;
  }

.description-enter-from {
  transform: scale(0);
}
.description-enter-to {
  transform: scale(1);
}
.description-enter-active {
  transition: all 0.5s ease;
}

.description-leave-from {
  transform: scale(1);
}
.description-leave-to {
  transform: scale(0);
}
.description-leave-active {
  transition: all 0.5s ease;
}

</style>
