import {classType} from '../types/Classify'
import {observable,action} from 'mobx'
import {coctlogIndex} from '../../api/Classify'
export default class ClassifyData{
    @observable
    list:classType[]=[]
    @action 
    async coctlogIndex(){
        let res:any= await coctlogIndex();
        this.list = res.categoryList;
        console.log(res.categoryList,'7879879')
    }
}