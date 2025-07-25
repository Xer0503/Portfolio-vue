<script setup>
    import Profile from '/profile.png'
</script>

<template>
    <div class="relative w-full h-100 rounded-2xl overflow-hidden">
        <div class="bg-[url('/bg.jpg')] bg-cover h-12/12 bg-center z-5"></div>
        <div class="absolute top-9 left-10 z-20">
            <p class="font-bold text-[35px] text-white">Rexie Villanueva</p>
        </div>
        <div class="absolute top-20 left-13 md:left-25 z-20">
            <p class="font-bold text-md text-gray-200 underline underline-offset-5">Fullstack Developer</p>
        </div>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <a href="mailto:rexievillanueva03@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%20Rexie%2C%20I%27m%20interested%20in%20collaborating%20with%20you." target="_blank" rel="noopener noreferrer">
                <button class="px-5 py-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-950 shadow-sm">
                    <span></span>
                    Send Message
                </button>
            </a>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-40"></div>
        <div class="absolute z-25 bottom-0 right-0 left-25 md:bottom-0 md:right-0 md:left-55">
            <img :src="Profile" alt="Profile" class="h-10/12 md:h-3/12" />
        </div>
        <div class="absolute z-28 inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
    </div>
</template>