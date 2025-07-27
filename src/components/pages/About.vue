<script setup>
    import CardAbout from './aboutUI/CardAbout.vue';
    import Contact from './aboutUI/Contact.vue';
    import AboutInfo from './aboutUI/AboutInfo.vue';
    import Skill from '../ui/Skill.vue';
    import { selectedView } from '../../utils';
    import Education from './aboutUI/Education.vue';
</script>

<template>
    <section>
        <!--Middle Section-->
        <div class="rounded-2xl">
            
            <!--About Card-->
            <div class="">
                <CardAbout />
            </div>
            
            <!--About Info-->
            <div class="rounded-2xl bg-gray-900 mt-2">
                <AboutInfo />
            </div>

            <!--Education-->
            <div class="rounded-2xl bg-gray-900 mt-2">
                <Education />
            </div>
            
            <!--Skill
            <div class="rounded-2xl bg-gray-900 mt-2 md:hidden">
                <Skill />
            </div>
            -->
            <!--Contact Info-->
            <div v-if="selectedView != 2" class="rounded-2xl bg-gray-900 mt-2">
                <Contact />
            </div>
        </div>
    <!--End Middle -->

    </section>
</template>