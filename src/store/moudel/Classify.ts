import {classType} from '../types/Classify'
import {observable,action} from 'mobx'
import {coctlogIndex,catalogCurrent} from '../../api/Classify';
import { isTemplateElement } from '@babel/types';
export default class ClassifyData{
    @observable//左边的分类类型
    list:classType[]=[];

     @observable//右边数据
    goodList:Array<any>=[];

    @observable//右边数据
    goodTxt:Array<any>=[];

    //右边banner图
    @observable
    currentBan:any;

    @observable
    arr:Array<any>= [];

    @observable
    currentTitle:any;
    
    @action 
    async coctlogIndex(){
        let res:any= await coctlogIndex();
        this.list = res.categoryList;
        // console.log(this.list)
        this.currentBan=res.currentCategory.wap_banner_url;
        this.currentTitle=res.currentCategory.name;
        this.arr=res.currentCategory.subCategoryList;
        
        console.log(this.arr,'arr====')
    }


    @action 
    async catalogCurrent(id:number){
        let res:any= await catalogCurrent({id})
        // console.log(res.currentCategory.wap_banner_url)
    //    console.log(res.currentCategory.subCategoryList)
       this.goodList=res.currentCategory.subCategoryList;
       this.goodTxt=res.currentCategory;
    //    console.log(this.goodList)
    this.currentBan=res.currentCategory.wap_banner_url;
    this.currentTitle=res.currentCategory.name;
    // console.log(this.wap_banner_url)
    }
}