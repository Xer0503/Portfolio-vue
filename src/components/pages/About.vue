<script setup>
    import CardAbout from './aboutUI/CardAbout.vue';
    import Contact from './aboutUI/Contact.vue';
    import AboutInfo from './aboutUI/AboutInfo.vue';
    import Skill from '../ui/Skill.vue';
</script>

<template>
    <section>
        <!--Middle Section-->
        <div class="rounded-2xl col-span-12 md:col-span-4">
            
            <!--About Card-->
            <div class="">
                <CardAbout />
            </div>
            
            <!--About Info-->
            <div class="rounded-2xl bg-gray-900 mt-2">
                <AboutInfo />
            </div>
            
            <!--Skill
            <div class="rounded-2xl bg-gray-900 mt-2 md:hidden">
                <Skill />
            </div>
            -->
            <!--Contact Info-->
            <div class="rounded-2xl bg-gray-900 mt-2">
                <Contact />
            </div>
        </div>
    <!--End Middle -->

    </section>
</template>