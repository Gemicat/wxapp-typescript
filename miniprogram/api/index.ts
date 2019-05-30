import createRequest from './createRequest'
import user from './entity/user'

export default {
  user: createRequest(user)
}