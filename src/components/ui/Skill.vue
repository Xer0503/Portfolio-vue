<script setup>
const logos = [
  { src: '/logos/html.svg', alt: 'HTML' },
  { src: '/logos/css.svg', alt: 'CSS' },
  { src: '/logos/js.svg', alt: 'JavaScript' },
  { src: '/logos/java.svg', alt: 'Java' },
  { src: '/logos/python.svg', alt: 'Python' },
  { src: '/logos/php.svg', alt: 'PHP' },
  { src: '/logos/sqlite.svg', alt: 'SQLite' },
  { src: '/logos/mysql.svg', alt: 'MySQL' },
  { src: '/logos/bootstrap.svg', alt: 'Bootstrap' },
  { src: '/logos/tailwind.svg', alt: 'Tailwind CSS' },
  { src: '/logos/flask.svg', alt: 'Flask' },
  { src: '/logos/vue.svg', alt: 'Vue.js' },
  { src: '/logos/laravel.svg', alt: 'Laravel' }
]
</script>

<template>
  <div class="overflow-hidden relative py-6 group">
    <div class="scroll-track">
      <div
        v-for="(logo, index) in logos.concat(logos)"
        :key="`${logo.alt}-${index}`"
        class="mx-6 flex items-center justify-center"
      >
        <img :src="logo.src" :alt="logo.alt" class="h-12 w-auto object-contain" />
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
  animation: scroll-left 25s linear infinite;
}

.group:hover .scroll-track {
  animation-play-state: paused;
}
</style>
