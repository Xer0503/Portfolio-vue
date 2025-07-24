<script setup>
    const logos = [
        '/contact/fb.svg',
        '/contact/gmail.svg',
        '/contact/github.svg',
        '/contact/linkedin.svg'
    ]

</script>

<template>
    <section class="flex flex-col space-y-3 p-3">
        <div class="flex space-x-2 text-white font-bold">
            <span>Logo</span>
            <p class="text-2xl">Get in touch</p>
        </div>

        <div class="flex space-x-5 justify-center">
            <div v-for="(logo, index) in logos" :key="index" class="">
                <img :src="logo" alt="contacts logo" class="h-7 mx-auto object-contain" />
            </div>
        </div>

        <div class="px-2">
            <p class="text-gray-300 text-sm indent-6">Let's build something great together, feel free to connect with me through any of the platform above.</p>
        </div>
    </section>
</template>