import api from './http'
// 登录接口
export const getlogin = (data) => api.post('api/sys/login', data)
// 获取用户基本资料
export const getMy = (data) => api.post('api/sys/profile', data)
