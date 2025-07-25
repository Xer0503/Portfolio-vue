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
  <div class="overflow-hidden whitespace-nowrap relative py-4" id="career">
    <div class="scroll-track">
      <div v-for="(logo, index) in logos.concat(logos)" :key="index" class="mx-4 flex items-center">
        <img :src="logo" class="h-16 w-auto object-contain" />
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

.scroll-track {
  display: flex;
  width: max-content;
  animation: scroll-left 20s linear infinite;
}
</style>