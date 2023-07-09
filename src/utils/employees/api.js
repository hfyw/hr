import api from '../http'

export const getuser = (params) =>
  api.get(api.adornUrl('attendances'), { params })
