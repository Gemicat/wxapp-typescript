const {WeChat, ...app} = getApp()
class Page extends WeChat.BasePage {
  constructor() {
    super()
    this.setDefaultData({
      motto: '点击 “编译” 以构建13',
      abs: '222',
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
    })
  }
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
  userInfoReadyCallback() {
    this.api.user.getUserInfo({data: '1111111'}).then(() => {
      console.log('请求成功咯')
    }).catch(() => {
      console.log('请求失败咯')
    })
    console.log(app.globalData.userInfo)
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true,
    })
  }

  getUserInfo(e: any) {
  }
}

WeChat.createPage(Page);