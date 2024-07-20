// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icons'],
  tailwindcss: {
    exposeConfig: true,
  },
  typescript: {
    typeCheck: true,
  },
  devServer: {
    port: 3002,
  },
})
