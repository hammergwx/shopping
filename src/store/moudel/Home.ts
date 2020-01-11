import { homeType } from "../types/Home";

import { observable, action } from "mobx";
import { homeData, brandList,goodListData } from "../../api/Home";
export default class HomeData {
  @observable
  data: homeType = {
    //首页数据
    banner: [],
    channel: [],
    newGoodsList: [],
    hotGoodsList: [],
    brandList: [],
    topicList: [],
    categoryList: []
  };
  @observable
  brandData: any = [];
  @observable
  goodData:any=[]
  @action
  async homeData() {
    let res: any = await homeData();
    this.data = res;
    console.log(this.data);
  }
  @action
  async brandList(id: number) {
    let res: any = await brandList({ id });
    this.brandData = res.brand;
  }
  @action 
  async goodListData(){
       let res:any=await goodListData();
       console.log(res) 
  }
}
