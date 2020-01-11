import request from '../utils/request';
export const coctlogIndex=()=>request.get('/catalog/index')
export const catalogCurrent=(params:any)=>request.get('/catalog/current',{id:params.id})