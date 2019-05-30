import WeChat from '../../lib/WeChat'
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
  onLoad() {
    this.api.user.getUserInfo({data: '1111111'})
    this.setData({
      userInfo: this.globalData.userInfo,
      hasUserInfo: true,
    })
  }

  getUserInfo(e: any) {
  }
}

WeChat.createPage(Page);