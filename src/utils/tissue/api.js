import api from '../http'
//查询企业的部门列表
export const getTissue = () => api.get(api.adornUrl('company/department'))
//添加部门
export const addTissue = (data) =>
  api.post(api.adornUrl('company/department'), data)
// 模态框下拉菜单数据
export const getSelect = () => api.get(api.adornUrl('/sys/user/simple'))
//查看部门
export const lookTissue = (params) =>
  api.get(api.adornUrl(`/company/department/${params.id}`), { params })
//删除部门
export const delTissue = (params) =>
  api.get(api.adornUrl(`/company/department/${params.id}`, { params }))
