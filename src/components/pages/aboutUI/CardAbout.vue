<script setup>
    import Profile from '../../../assets/profile.jpg'
    import Background from '../../../assets/icons/bg.jpg'
</script>

<template>
    <div class="bg-gray-800 flex flex-col w-full rounded-md">
        <div
            class="bg-cover bg-center flex flex-col h-[100px] md:h-[275px] text-white justify-between py-20 px-5 rounded-t-2xl"
            :style="{ backgroundImage: `url(${Background})` }"
        >
        </div>
        <div class="flex justify-between space-x-10 items-center px-5">
            <div class="w-9/12 text-center">
                <button class="bg-gray-900 text-md text-white px-6 rounded-[10px] py-2 mt-auto">Message Me</button>
            </div>
            <div class="mt-[-80px] md:mt-[-150px]">
                <img :src="Profile" alt="Profile Picture" loading="lazy" class="rounded-full outline-4 outline-gray-800">
            </div>
        </div>

        <div class="flex flex-col justify-end items-end px-5 my-5">
            <p class="text-white font-bold text-2xl underline underline-offset-4 md:mx-auto">Rexie Villanueva</p>
            <p class="text-gray-500 mr-5 md:mx-auto">FullStack Developer</p>
        </div>
    </div>
</template>