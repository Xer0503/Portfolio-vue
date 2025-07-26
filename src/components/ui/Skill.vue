<script setup>
const logos = [
  '/logos/html.svg',
  '/logos/css.svg',
  '/logos/js.svg',
  '/logos/java.svg',
  '/logos/python.svg',
  '/logos/php.svg',
  '/logos/sqlite.svg',
  '/logos/mysql.svg',
  '/logos/bootstrap.svg',
  '/logos/tailwind.svg',
  '/logos/flask.svg',
  '/logos/vue.svg',
  '/logos/laravel.svg'
]
</script>

<template>
  <div class="overflow-hidden whitespace-nowrap relative py-2 group" id="career">
    
    <div class="scroll-track flex w-max animate-scroll group-hover:paused">
      <div
        v-for="(logo, index) in logos.concat(logos)"
        :key="index"
        class="mx-4 flex items-center"
      >
        <img :src="logo" class="h-16 w-13 md:w-10 object-contain hover:scale-110 md:hover:scale-130 active:scale-150 md:active:scale-100 transition-transform duration-300" />
      </div>
    </div>
    <div class="scroll-track-r flex w-max animate-scroll group-hover:paused">
      <div
        v-for="(icon, index) in logos.concat(logos)"
        :key="index"
        class="mx-4 flex items-center"
      >
        <img :src="icon" class="h-16 w-13 md:w-10 object-contain hover:scale-110 active:scale-150 md:hover:scale-130 md:active:scale-100 transition-transform duration-300 " />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.scroll-track {
  display: flex;
  width: max-content;
  animation: scroll-left 20s linear infinite;
}

.scroll-track-r {
  display: flex;
  width: max-content;
  animation: scroll-right 20s linear infinite;
}

.scroll-track:hover {
  animation-play-state: paused;
}
.scroll-track:active {
  animation-play-state: paused; /* pause on hover */
}

.scroll-track-r:hover {
  animation-play-state: paused;
}
.scroll-track-r:active {
  animation-play-state: paused; /* pause on hover */
}
</style>