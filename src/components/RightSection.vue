<script setup>
    import Skill from './ui/Skill.vue';
    import Contact from './pages/aboutUI/Contact.vue';
</script>

<template>
    <!--Right Sidebar-->
    <div class="h-screen rounded-2xl col-span-12 md:col-span-4 space-y-2">
        <!--Skills-->
        <div class="rounded-2xl bg-gray-800">
            <skill />
        </div>

        <!--Expertise-->
        <div class="h-5/12 rounded-2xl bg-gray-800">
        
        </div>

        <!--Contacts-->
        <div class="rounded-2xl bg-gray-800">
            <Contact />
        </div>
    </div>
    <!--End of Right Sidebar-->
</template>