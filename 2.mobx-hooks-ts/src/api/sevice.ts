import Axios from 'axios'
import { BaseUrl } from '../config'
let service = Axios.create({
  baseURL: BaseUrl,
  timeout: 20000,
  headers: {
    'content-type': 'application/json'
  }
})

service.interceptors.response.use(function(res){
  if(res.status === 200){
    if(res.data.status === 200){
      return res.data
    }else{
      let toast = new (require('@wnl/ui').toast);
      toast.show('系统异常')
      return Promise.reject(res.data)
    }
  }
  let toast = new (require('@wnl/ui').toast);
  toast.show('服务器异常')
  return Promise.reject(res.data)
}, function(err){
  let toast = new (require('@wnl/ui').toast);
  toast.show('服务器异常')
  return Promise.reject(err)
})

export default service