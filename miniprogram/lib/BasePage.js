export default class BasePage {
  constructor() {
    const {globalData} = getApp()
    this.globalData = globalData
    this.setDefaultData({
      abs: '111'
    })
  }
  onLoad() {
    console.log(11112)
  }
  showErrorMsg(title) {
    wx.showModal({})
  }
  /**
   * 设置初始 data
   * @param {*} data 
   */
  setDefaultData(data) {
    this.data = Object.assign({}, this.data, data)
  }
}