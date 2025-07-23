<script setup>
    import { ref } from 'vue'
    import Sidenav from './ui/Sidenav.vue';
    import MiddleSection from './MiddleSection.vue';
    import RightSection from './RightSection.vue';
    import Nav from './ui/Nav.vue'
    import SidebarMobile from './ui/SidebarMobile.vue';

    import { navToggle } from '../utils';
    import { onMounted, watch } from 'vue'

    watch(navToggle, (isOpen) => {
    document.body.classList.toggle('overflow-hidden', isOpen)
})

</script>

<template>
    <!-- Nav for mobile -->
    <div v-if="!navToggle" class="block md:hidden max-h-50 bg-gray-900">
    <Nav />
    </div>

    <!-- Sidebar for mobile -->
    <div v-if="navToggle" class="w-9/12 bg-gray-700 shadow-lg rounded-r-3xl fixed z-50 md:hidden">
    <SidebarMobile />
    </div>

    <!-- Blur overlay -->
    <div
    v-if="navToggle"
    @click="navToggle = false"
    class="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"
    ></div>

    <!-- Main layout -->
    <section @click="navToggle = false" class="p-5 h-screen w-screen overflow-auto">
    <div class="grid grid-cols-12 gap-5">
        <!-- Sidebar (desktop only) -->
        <div class="h-full bg-gray-800 hidden md:block rounded-2xl col-span-12 md:col-span-3">
        <Sidenav />
        </div>

        <!-- Main + Right -->
        <div class="h-screen rounded-2xl col-span-12 md:col-span-9 overflow-y-auto">
            <div class="grid grid-cols-12 space-x-3">
                <div class="col-span-12 md:col-span-8">
                <MiddleSection />
                </div>
                <div class="col-span-12 md:col-span-4">
                <RightSection />
                </div>
            </div>
        </div>
    </div>
    </section>
</template>