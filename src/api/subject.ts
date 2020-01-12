import request from  '../utils/request'

export const Sub=()=>request.get('/topic/list')

export const SubDetail =(params:any)=>request.get('/topic/related',{id:params.id})