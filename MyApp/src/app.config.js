export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/recommend/recommend",
    "pages/search/search",
    "pages/myself/myself",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#E54616",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./image/Group 9231.png",
        selectedIconPath: "./image/Group 9231.png",
      },
      {
        pagePath: "pages/recommend/recommend",
        text: "今日推荐",
        iconPath: "./image/hand-thumbs-up-fill.png",
        selectedIconPath: "./image/hand-thumbs-up-fill.png",
      },
      {
        pagePath: "pages/search/search",
        text: "搜索",
        iconPath: "./image/hourglass-bottom-fill.png",
        selectedIconPath: "./image/hourglass-bottom-fill.png",
      },
      {
        pagePath: "pages/myself/myself",
        text: "我的",
        iconPath: "./image/person-fill.png",
        selectedIconPath: "./image/person-fill.png",
      },
    ],
  },
});
