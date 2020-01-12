import {subjectType,} from '../types/subject'

import {observable,action} from 'mobx'

import {Sub,SubDetail} from '../../api/subject'


export default class subjectData{
    // 主题 页面
     @observable
     subjectList:subjectType[]=[]

     @observable
     DetailList:any=[]

     @action
     async SubDetail(id:number){
         let res:any=await SubDetail({id});
         this.DetailList=res;
         console.log(res);
     }

     @action 
     async Sub(){
         let res:any=await Sub();
         this.subjectList=res.data;
         console.log(res.data,'====-0-=========');
     }
}