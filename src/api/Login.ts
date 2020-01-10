import request from '../utils/request'

export const LoginFn = (params: any) => request.post('/auth/loginByMobile', params)
