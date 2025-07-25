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
  <section class="py-6 bg-gray-100 dark:bg-gray-900 rounded-b-2xl">
    <div class="flex flex-wrap justify-center gap-6 px-4">
      <div
        v-for="(logo, index) in logos"
        :key="index"
        class="w-24 h-24 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:scale-110 active:scale-120 transition-transform duration-300"
      >
        <img :src="logo.src" :alt="logo.alt" class="w-12 h-12 object-contain" />
      </div>
    </div>
  </section>
</template>