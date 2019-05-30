import request from '../utils/request'

function createRequest(apis = {}) {
  const apiList = {}
  Object.keys(apis).forEach(key => {
    apiList[key] = (options) => {
      const { data = {} } = options
      request.request({
        ...apis[key],
        data
      })
    }
  })
  return apiList
}

export default createRequest