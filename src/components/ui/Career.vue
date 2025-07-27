<script setup>
import { ref } from 'vue'

import Exp from '../../assets/icons/time.svg'
import Certificates from '../../assets/icons/certificate.svg'
import Projects from '../../assets/icons/projects.svg'
import Technologies from '../../assets/icons/tech.svg'

import ExpExpand from './ExpertUI/ExpExpand.vue'
import CertificateExapnd from './ExpertUI/Certificates.vue'
import ProjectExpand from './ExpertUI/ProjectExpand.vue'
import TechnologiesExpand from './ExpertUI/TechnologiesExpand.vue'

const selectCareer = ref(0)

const careerStat = [
  { id: 1, view: ExpExpand, heading: 'Experience', icon: Exp, num: 0 },
  { id: 2, view: CertificateExapnd, heading: 'Certificates', icon: Certificates, num: 15 },
  { id: 3, view: ProjectExpand, heading: 'Projects', icon: Projects, num: 20 },
  { id: 4, view: TechnologiesExpand, heading: 'Technologies', icon: Technologies, num: 13 },
]

const viewsStats = careerStat.reduce((map, item) => {
  map[item.id] = item.view
  return map
}, {})

const heading = careerStat.reduce((map, item) => {
  map[item.id] = item.heading
  return map
}, {})
</script>

<template>
    <!--Card-->
    <section class="px-2 py-3 relative">
        <!--Card Head-->
        <div class="my-3 md:my-1 px-3">
            <h2 class="text-white font-black text-2xl">Career Stats</h2>
        </div>

        <!--Card Body-->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-white">
            <div v-for="career in careerStat" 
            :key="career.id"
            @click="selectCareer = career.id" 
            class="rounded-2xl bg-gray-800 px-2 py-4 cursor-pointer hover:bg-gray-500 hover:scale-110 hover:outline-2 transition-transform duration-300">
                <a href="#career">
                    <div class="flex flex-col space-y-2 px-3 justify-center items-center font-bold">
                        <span class="flex space-x-3">
                            <img :src="career.icon" :alt="career.heading" class="w-15 md:w-10 hover:scale-150 transition-transform duration-300" />
                            <h2 class="text-lg font-bold hover:scale-120 transition-transform duration-300">{{ career.num }}</h2>
                        </span>
                        <p class="text-md md:text-sm hover:scale-120 transition-transform duration-300">{{ career.heading }}</p> 
                    </div>
                </a>
            </div>
        </div>
        <!--End of Card body-->

        <!---->
        <div v-if="selectCareer > 0" class="fixed inset-0 z-40 bg-black opacity-70 h-screen"></div>
        <div
        v-if="selectCareer > 0"
        @click="selectCareer = 0"
        class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        ></div>

        <transition name="pop">
        <div v-if="selectCareer > 0" class="flex flex-col rounded-2xl absolute inset-0 z-50">
            <div class="flex justify-between items-center px-5 py-2">
                <span>
                    <p class="text-white font-bold text-2xl">{{ heading[selectCareer] }}</p>
                </span>
                <span @click="selectCareer = 0">
                    <img src='/icons/back.svg' alt="back" class="w-7 hover:scale-125 hover:bg-blue-500 active:bg-blue-700 rounded-full transition-transform duration-300 cursor-pointer" />
                </span>
            </div>
            <div class=""> 
                <component :is="viewsStats[selectCareer]" />
            </div>
        </div>
        </transition>
    </section>
</template>

<style scoped>
.pop-enter-from {
  transform: scale(0);
  opacity: 0;
}
.pop-enter-to {
  transform: scale(1);
  opacity: 1;
}
.pop-enter-active {
  transition: all 0.3s ease;
}

.pop-leave-from {
  transform: scale(1);
  opacity: 1;
}
.pop-leave-to {
  transform: scale(0);
  opacity: 0;
}
.pop-leave-active {
  transition: all 0.3s ease;
}
</style>