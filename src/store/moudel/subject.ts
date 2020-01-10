import {subjectType} from '../types/subject'

import {observable,action} from 'mobx'

import {Sub} from '../../api/subject'


export default class subjectData{
     @observable
     subjectList:subjectType[]=[]
    
     @action 
     async Sub(){
         let res:any=await Sub();
         this.subjectList=res.data;
         console.log(res.data,'====-0-=========');
     }
}