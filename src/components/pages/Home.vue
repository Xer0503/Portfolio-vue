<script setup>
    import Welcome from '../ui/Welcome.vue';
    import Career from '../ui/Career.vue';
</script>

<template>
    <!--Middle Section-->
    <div class="h-screen rounded-2xl col-span-12 md:col-span-4 space-y-2">
        <!--Welcome Card-->
        <div class="h-5/12 rounded-2xl bg-gray-800">
            <Welcome />
        </div>

        <!--Career Stat-->
        <div class="rounded-2xl bg-gray-800">
            <Career />
        </div>

        <!--Feautured-->
        <div class="h-5/12 rounded-2xl bg-gray-800">
            
        </div>
    </div>
    <!--End Middle -->
</template>