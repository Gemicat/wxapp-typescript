class Request {
  constructor(params: { [T: string]: any }) {
    this.baseUrl = params.baseUrl
  }
  request(config) {
    const { method = 'get', url = '', data = {} } = config
    const that = this
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${that.baseUrl}${url}`,
        data,
        method,
        success(res) {
          resolve(res)
        },
        fail() {
          reject({
            msg: '请求失败',
            url: that.baseUrl + url,
            method,
            data
          })
        }
      })
    })
  }
}

const request = new Request({
  baseUrl: 'http://dxy.net'
})

export default request