<script setup>
const contacts = [
  { icon: '/contact/fb.svg', link: 'https://www.facebook.com/rexie.villanueva.03' },
  { icon: '/contact/gmail.svg', link: 'mailto:rexievillanueva03@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%20Rexie%2C%20I%27m%20interested%20in%20collaborating%20with%20you.' },
  { icon: '/contact/github.svg', link: 'https://github.com/Xer0503' },
  { icon: '/contact/linkedin.svg', link: 'https://www.linkedin.com/in/rexie-villanueva-1b3923374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
]
</script>

<template>
  <section class="flex flex-col space-y-3 p-3 rounded-2xl">
    <div class="flex space-x-2 text-white font-bold">
      <span class="flex items-center">
        <img src="/mail.svg" alt="Inbox" class="w-7" />
      </span>
      <p class="text-2xl">Get in touch</p>
    </div>

    <div class="flex space-x-5 justify-center">
      <a
        v-for="(item, index) in contacts"
        :key="index"
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="item.icon" alt="contact" class="h-7 object-contain hover:scale-110 transition duration-200" />
      </a>
    </div>

    <div class="px-2">
      <p class="text-gray-300 text-sm text-center">
        Let's build something great together — feel free to connect with me through any of the platforms above.
      </p>
    </div>
  </section>
</template>