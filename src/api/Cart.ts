import request from '../utils/request';
export const CartFn = (params: any) => request.get('/cart/index', params)