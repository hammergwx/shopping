import {homeType} from '../types/Home';
import {observable,action} from 'mobx';
import {homeData} from '../../api/Home';
export default class HomeData{
    @observable
    data:homeType={
        banner:[],
        channel:[],
        newGoodsList: [],
        hotGoodsList: [],
        brandList: [],
        topicList: [],
        categoryList: []
    }
    @action
    async homeData(){
        let res:any=await homeData();
        // console.log(res.data)
        this.data=res
        console.log(this.data)
    }

}