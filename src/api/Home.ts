import request from '../utils/request';
//首页数据
export const homeData =()=>request.get('/')
export const brandList =(params:any)=>request.get('/brand/detail',{id:params.id})
export const goodListData=()=>request.get('/goods/list')
