<script setup>
    import Exp from '../../assets/icons/time.svg'
    import Certificates from '../../assets/icons/certificate.svg'
    import Projects from '../../assets/icons/projects.svg'
    import Technologies from '../../assets/icons/tech.svg'
</script>

<template>
    <!--Card-->
    <section class="px-2 py-3">
        <!--Card Head-->
        <div class="my-3 px-3">
            <h2 class="text-white font-black text-2xl">Career Stats</h2>
        </div>

        <!--Card Body-->
        <div>
            <div class="grid grid-cols-2 gap-2 text-white">
                <div class="rounded-2xl bg-gray-600 px-2 py-2 hover:bg-amber-300 hover:text-gray-950  active:bg-amber-300 active:text-gray-950">
                    <div class="flex flex-col space-y-2 px-3 justify-center items-center font-bold">
                        <span class="flex space-x-3">
                            <img :src="Exp" alt="icons" class="w-15" />
                            <h2 class="text-3xl font-bold">0</h2>
                        </span>
                        <span>Experience</span>
                    </div>
                </div>
                <div class="rounded-2xl bg-gray-600 px-2 py-2 hover:bg-amber-300 hover:text-gray-950  active:bg-amber-300 active:text-gray-950">
                    <div class="flex flex-col space-y-2 px-3 justify-center items-center font-bold">
                        <span class="flex space-x-3">
                            <img :src="Certificates" alt="icons" class="w-15" />
                            <h2 class="text-3xl font-bold">5</h2>
                        </span>
                        <span>Certificates</span>
                    </div>
                </div>

                <div class="rounded-2xl bg-gray-600 px-2 py-2 hover:bg-amber-300 hover:text-gray-950  active:bg-amber-300 active:text-gray-950">
                    <div class="flex flex-col space-y-2 px-3 justify-center items-center font-bold">
                        <span class="flex space-x-3">
                            <img :src="Projects" alt="icons" class="w-15" />
                            <h2 class="text-3xl font-bold">20</h2>
                        </span>
                        <span>Projects</span>
                    </div>
                </div>
                <div class="rounded-2xl bg-gray-600 px-2 py-2 hover:bg-amber-300 hover:text-gray-950  active:bg-amber-300 active:text-gray-950">
                    <div class="flex flex-col space-y-2 px-3 justify-center items-center font-bold">
                        <span class="flex space-x-3">
                            <img :src="Technologies" alt="icons" class="w-15" />
                            <h2 class="text-3xl font-bold">10</h2>
                        </span>
                        <span>Technologies</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>