import WeChat from '../../../lib/WeChat'
class Component extends WeChat.BasePage {
  constructor() {
    super()
  }
  properties = {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    inner: {
      type: String,
      value: 'default value',
    }
  }
  lifetimes = {
    attached() {
      console.log(11112)
    }
  }
  onLoad() {
    const query = wx.createSelectorQuery()
    query.select('#slot').boundingClientRect()
    console.log(query)
  }
}

WeChat.createComponent(Component);