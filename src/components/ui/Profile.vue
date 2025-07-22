<script setup>
    import P from '../../assets/profile.jpg'
</script>

<template>
    <section class="flex flex-col p-3  text-white">
        <div>
            <img :src="P" alt="Profile Picture" loading="lazy" class="w-9/12 mx-auto mb-4 rounded-b-full rounded-br-full shadow" />
        </div>
        <div class="text-center font-bold">
            <h3 class="text-2xl">Rexie N. Villanueva</h3>
            <h2 class="text-md">FullStack Developer</h2>
        </div>
        <div class="text-center px-8 my-5">
            <button class="w-full py-1 bg-gray-900 rounded-2xl">
                Resume
            </button>
        </div>
    </section>
</template>