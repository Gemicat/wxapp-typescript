import api from '../api/index'

export default class BasePage {
  constructor() {
    this.api = api
    this.setDefaultData({
      abs: '111'
    })
  }
  data = {}
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