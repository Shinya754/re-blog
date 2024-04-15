import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://shinya754.github.io/re-blog/',
  lang: 'zh-CN',
  title: '夤夜的世界旅行手记',
  author: {
    name: '千绫',
	avatar: 'https://s21.ax1x.com/2024/04/15/pFv49hD.jpg',
  },
    /**
   * 站点图标
   */
  favicon: 'https://s21.ax1x.com/2024/04/09/pFLqonA.png',
  /**
   * 副标题
   */
  subtitle: "Shinya's world travel notes.",
  description: "Welcome.",  
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/Shinya754',
      icon: 'i-ri-home-line',
      color: '#9999FF',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=368715015',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/yin-ye-14-16',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/4950796',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:shinya754@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],
  /**
   * 开启阅读统计
   */
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },
  search: {
    enable: true,
  },

  sponsor: {
    enable: true,
    title: "希望我提供的帮助能够补偿你在这里花费的时间。",
    methods: [
	  {
	    name: '无',
		url: "https://s21.ax1x.com/2024/04/15/pFv51PO.jpg",
	  },
    ],
  },
})
