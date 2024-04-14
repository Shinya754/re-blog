import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonComponents } from 'valaxy-addon-components'
import { VitePWA } from 'vite-plugin-pwa'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
  'i-ri-netease-cloud-music-line',
  'i-ri-zhihu-line',
  'i-ri-bilibili-line',
  'i-ri-mail-line',
]


/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  
  vite:{
  	base: "/re-blog/",
  },

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '夤夜的世界旅行手记',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
    ],
	
	  /**
   * @en - Fireworks when click
   * @zh - 点击时的烟花效果
   */
    fireworks: {
	  enable: true,
	/**
	 * @en - Fireworks colors
	 * @zh - 烟花颜色
	 * @default ['#66A7DD', '#3E83E1', '#214EC2']
	 */
	  colors: ['#66CCFF', '#9999FF', '#FFFF00'],
    },
	/**
   * @en Background image
   * @zh 背景图
   */
    bg_image: {
    /**
     * @en Enable background image
     */
      enable: true,
    /**
     * @en Image url
     */
      url: "https://s11.ax1x.com/2022/07/21/jqsay8.png",
    /**
     * @en Image url when dark mode
     */
      //dark?: string
    /**
     * @en Image opacity不透明度
     */
      opacity: 0.7,
    },

    footer: {
      since: 2024,
      beian: {
        enable: false,
        icp: 'none',
      },
    },
  },

  unocss: { safelist },
})

