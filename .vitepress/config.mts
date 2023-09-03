import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Project Template",
  description: "A VitePress Site",
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/features' }
    ],

    sidebar: [
      {
        text: 'Features',
        items: [
          { text: 'Features', link: '/features' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/justinaskav/vitepress-template' }
    ]
  }
})
