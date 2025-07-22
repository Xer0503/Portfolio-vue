<script setup>
    import Profile from './ui/Profile.vue'
    import Sidenav from './ui/Sidenav.vue';
</script>

<template>
    <!--Main Layout-->
    <section class="p-5 h-screen w-screen">
        <div class="grid grid-cols-12 gap-5">
            <!--Left Sidebar Section-->
            <div class="h-screen bg-gray-800 rounded-2xl col-span-12 md:col-span-4">
                <Profile />
                <Sidenav />
            </div>
            <!--End Left Sidebar-->

            <!--Middle Section-->
            <div class="h-screen rounded-2xl col-span-12 md:col-span-4 space-y-2">
                <!--Welcome Card-->
                <div class="h-5/12 rounded-2xl bg-gray-800">
                
                </div>

                <!--Career Stat-->
                <div class="h-2/12 rounded-2xl bg-gray-800">
                </div>

                <!--Feautured-->
                <div class="h-5/12 rounded-2xl bg-gray-800">
                </div>
            </div>
            <!--End Middle -->

            <!--Right Sidebar-->
            <div class="h-screen rounded-2xl col-span-12 md:col-span-4 space-y-2">
                <!--Skills-->
                <div class="h-3/12 rounded-2xl bg-gray-800">
                
                </div>

                <!--Expertise-->
                <div class="h-5/12 rounded-2xl bg-gray-800">
                
                </div>

                <!--Contacts-->
                <div class="h-3/12 rounded-2xl bg-gray-800">
                
                </div>
            </div>
            <!--End of Right Sidebar-->
        </div>
    </section>
</template>