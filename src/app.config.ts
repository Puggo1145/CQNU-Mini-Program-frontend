export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/study/study',
    'pages/mine/mine',
    'pages/service/service'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationStyle: "custom"
  },
  tabBar: {
    color: "#1e1e1e",
    selectedColor: "#3236d7",
    backgroundColor: "#fff",
    borderStyle: "white",
    list: [
      {pagePath: 'pages/index/index', text: '首页', iconPath: './static/tabBar/home-icon.png', selectedIconPath: './static/tabBar/home-selectedIcon.png'},
      {pagePath: 'pages/study/study', text: '学习', iconPath: './static/tabBar/study-icon.png', selectedIconPath: './static/tabBar/study-selectedIcon.png'},
      {pagePath: 'pages/service/service', text: '服务', iconPath: './static/tabBar/service-icon.png', selectedIconPath: './static/tabBar/service-selectedIcon.png'},
      {pagePath: 'pages/mine/mine', text: '我的', iconPath: './static/tabBar/mine-icon.png', selectedIconPath: './static/tabBar/mine-selectedIcon.png'}
    ],
  },
})
