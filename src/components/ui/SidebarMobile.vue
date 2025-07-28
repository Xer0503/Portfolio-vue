<script setup>
    import Sidenav from './Sidenav.vue';
</script>

<template>
    <div class="flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
        <!-- Profile -->
        <section class="px-4 pt-6 shrink-0 text-center">
            <img :src="P" alt="Profile" class="w-24 h-24 mx-auto mb-3 rounded-full shadow-md object-cover" />
                <p class="text-xl font-bold">Rexie Villanueva</p>
                <p class="text-sm text-gray-300">FullStack Developer</p>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    class="block mt-4 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-2xl text-white text-sm"
                >
                    View Resume
                </a>
        </section>

        <!-- Navigation -->
        <nav class="flex-1 mt-4 px-4">
            <ul class="space-y-3">
                <li
                v-for="item in navItems"
                :key="item.id"
                @click="handleNavClick(item.id)"
                class="flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200"
                :class="{ 'bg-gray-600': selectedView === item.id }"
                >
                <img :src="selectedView === item.id ? item.iconBlue : item.icon" class="w-5 h-5" />
                <span class="text-sm">{{ item.label }}</span>
                </li>
            </ul>
        </nav>

        <!-- Footer (sticky bottom) -->
        <div class="px-4 py-3 shrink-0 bg-gray-800">
            <div class="flex justify-between items-center bg-gray-600 px-3 py-2 rounded-xl text-sm">
                <span class="flex items-center space-x-1">
                <span>🌓</span>
                <span>Dark Mode</span>
                </span>
                <button @click="dark = !dark" class="bg-gray-800 px-3 py-1 rounded-full text-white">
                {{ dark ? 'On' : 'Off' }}
                </button>
            </div>
            <footer class="text-center text-xs text-gray-400 mt-2">
                <p>Design & Built by Rexie Villanueva</p>
                <p>2025, All rights reserved.</p>
            </footer>
        </div>
    </div>
</template>