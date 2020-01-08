import {subjectType} from '../types/subject'
import {observable,action} from 'mobx'
import {Special} from '../../api/subject'


export default class subjectData{
     @observable
     subjectList:subjectType[]=[]
    
     @action 
     async Special(){
         console.log(this.subjectList);
         let res:any=await Special();
         this.subjectList=res.getList;
         console.log(res.getList,'====-0-=========');
     }
}