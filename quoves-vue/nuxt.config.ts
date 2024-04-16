// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['/styles/app.scss'],
  ssr: false,
  app: {
    head: {
      meta: [
        { property: 'og:image', content: 'https://i.ibb.co/MGJ4MnY/og-image.png' },
        { property: 'og:title', content: 'QOVES - Design Sample' },
        { property: 'og:description', content: 'This is an amazing design by an amazing developer.' },
      ],
    },
  },
})
