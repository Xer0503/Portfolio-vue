<script setup>
    import P from '../../assets/profile.jpg'
    import Nav from '../../assets/icons/nav.svg'
    import { navToggle } from '../../utils';
    import { selectedView } from '../../utils';
</script>

<template>
    <nav v-if="navToggle === navToggle" class="flex justify-between items-center px-5 py-2">
        <span v-if="selectedView != 2">
            <img @click="navToggle = true" :src="P" alt="Profile Picture" loading="lazy" class="w-10 mx-auto rounded-full" />
        </span>
        <span>
            <img @click="navToggle = true" :src="Nav" alt="Menu Icon" loading="lazy" class="w-10 mx-auto" />
        </span>
    </nav>
</template>