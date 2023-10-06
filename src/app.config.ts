export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/index/Content/Message/MessageDetails/MessageDetails',

    'pages/study/study',
    'pages/classtable/classtable',

    'pages/mine/mine',
    'pages/mine/myPosts/myposts',
    'pages/mine/contactUs/contactUs',
    'pages/mine/linkOfficial/linkOfficial',

    'pages/service/service',
    'pages/service/classroomNav/classroomNav',

    'pages/posts/createpost/createpost',
    'pages/posts/postpage/postpage',
 
    'pages/search/search',
    'pages/search/searchResult/searchResult',
 
    'pages/login/login',
    'pages/register/register'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarTextStyle: 'black',
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
  lazyCodeLoading: 'requiredComponents',
})
