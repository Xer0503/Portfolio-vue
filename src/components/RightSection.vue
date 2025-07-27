<script setup>
    import Skill from './ui/Skill.vue';
    import Contact from './pages/aboutUI/Contact.vue';
    import { selectedView } from '../utils';
    import Expert from './ui/Expert.vue';
</script>

<template>
    <!--Right Sidebar-->
    <div class="h-screen rounded-2xl col-span-12 md:col-span-4 space-y-2">
        <!--Skills-->
        <div v-if="selectedView != 2" class="rounded-2xl bg-gray-800">
            <skill />
        </div>

        <!--Expertise-->
        <div class="rounded-2xl bg-gray-800">
            <Expert />
        </div>

        <!--Contacts-->
        <div class="rounded-2xl bg-gray-800">
            <Contact />
        </div>
    </div>
    <!--End of Right Sidebar-->
</template>