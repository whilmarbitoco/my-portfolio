import { defineStore } from 'pinia'

export const useSocialStore = defineStore('socials', {
  state: () => ({
    socials: {
      github: 'https://github.com/whilmarbitoco',
      facebook: 'https://web.facebook.com/wb2c0',
      linkedin: 'https://www.linkedin.com/in/whilmar-bitoco-505a5628b/',
    },
  }),
})
