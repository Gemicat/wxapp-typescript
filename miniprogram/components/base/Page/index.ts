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
      console.log('容器组件生命周期调用')
    }
  }
}

WeChat.createComponent(Component);