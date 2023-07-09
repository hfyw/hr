import api from '../http'
//获取所有权限点
export const getData = () => api.get(api.adornUrl('sys/permission'))
