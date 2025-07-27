<script setup>
    import Welcome from '../ui/Welcome.vue';
    import Career from '../ui/Career.vue';
    import Expert from '../ui/Expert.vue'
    import Skill from '../ui/Skill.vue';
    import Contact from './aboutUI/Contact.vue';
    import Feauture from '../ui/Feauture.vue'
</script>

<template>
    <!--Middle Section-->
    <div class="rounded-2xl space-y-2">

        
        <!--Welcome Card-->
        <div class="h-5/12 rounded-2xl bg-gray-900">
            <Welcome />
        </div>
        <div class="h-5/12 rounded-2xl bg-gray-900 md:hidden">
            <Skill />
        </div>

        <!--Career Stat-->
        <div class="rounded-2xl bg-gray-900">
            <Career />
        </div>

        <div class="rounded-2xl bg-gray-900">
            <Feauture />
        </div>

        <!--Expertise-->
        <div class="rounded-2xl bg-gray-900 md:hidden">
            <Expert />
        </div>

        <!--Expertise-->
        <div class="rounded-2xl bg-gray-900 md:hidden">
            <Expert />
        </div>

        <!--Contacts-->
        <div class="rounded-2xl bg-gray-900 lg:hidden">
            <Contact />
        </div>
    </div>
    <!--End Middle -->
</template>