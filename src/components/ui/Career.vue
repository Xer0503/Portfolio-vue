<script setup>
    import Exp from '../../assets/icons/time.svg'
    import Certificates from '../../assets/icons/certificate.svg'
    import Projects from '../../assets/icons/projects.svg'
    import Technologies from '../../assets/icons/tech.svg'

    import { selectCareer } from '../../utils'

    import ExpExpand from './ExpertUI/ExpExpand.vue'
    import CertificateExapnd from './ExpertUI/Certificates.vue'
    import ProjectExpand from './ExpertUI/ProjectExpand.vue'
    import TechnologiesExpand from './ExpertUI/TechnologiesExpand.vue'

    const viewsStats = {
        1 : ExpExpand,
        2 : CertificateExapnd,
        3 : ProjectExpand,
        4 : TechnologiesExpand
    }

</script>

<template>
    <!--Card-->
    <section class="px-2 py-3 relative">
        <!--Card Head-->
        <div class="my-3 px-3">
            <h2 class="text-white font-black text-2xl">Career Stats</h2>
        </div>

        <!--Card Body-->
        <div>
            <div class="grid grid-cols-2 gap-2 text-white">
                <div @click="selectCareer = 1" class="rounded-2xl bg-gray-600 px-2 py-2 cursor-pointer">
                    <div class="flex flex-col space-y-2 px-3 justify-center items-center font-bold">
                        <span class="flex space-x-3">
                            <img :src="Exp" alt="icons" class="w-15" />
                            <h2 class="text-3xl font-bold">0</h2>
                        </span>
                        <span>Experience</span>
                    </div>
                </div>
                <div @click="selectCareer = 2" class="rounded-2xl bg-gray-600 px-2 py-2 cursor-pointer">
                    <div class="flex flex-col space-y-2 px-3 justify-center items-center font-bold">
                        <span class="flex space-x-3">
                            <img :src="Certificates" alt="icons" class="w-15" />
                            <h2 class="text-3xl font-bold">5</h2>
                        </span>
                        <span>Certificates</span>
                    </div>
                </div>

                <div @click="selectCareer = 3" class="rounded-2xl bg-gray-600 px-2 py-2 cursor-pointer">
                    <div class="flex flex-col space-y-2 px-3 justify-center items-center font-bold">
                        <span class="flex space-x-3">
                            <img :src="Projects" alt="icons" class="w-15" />
                            <h2 class="text-3xl font-bold">20</h2>
                        </span>
                        <span>Projects</span>
                    </div>
                </div>
                <div @click="selectCareer = 4" class="rounded-2xl bg-gray-600 px-2 py-2 cursor-pointer">
                    <div class="flex flex-col space-y-2 px-3 justify-center items-center font-bold">
                        <span class="flex space-x-3">
                            <img :src="Technologies" alt="icons" class="w-15" />
                            <h2 class="text-3xl font-bold">13</h2>
                        </span>
                        <span>Technologies</span>
                    </div>
                </div>
            </div>
        </div>
        <!--End of Card body-->

        <!---->
        <div v-if="selectCareer > 0" class="black opacity-50 absolute inset-0 z-10 h-screen">
        </div>
        <transition name="pop">
        <div v-if="selectCareer > 0" class="w-full h-full flex flex-col bg-gray-950 rounded-2xl absolute inset-0 z-20">
            <div class="flex justify-between items-center px-5 py-2">
                <span>
                    <p class="text-white font-bold text-2xl">Technologies</p>
                </span>
                <button @click="selectCareer=0" class="text-white rounded-full px-3 text-2xl mx-3 mt-2 cursor-pointer">x</button>
            </div>
            <div class="h-full"> 
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