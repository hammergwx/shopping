import { homeType } from "../types/Home";

import { observable, action } from "mobx";
import { homeData, brandList,goodListData ,googDetail} from "../../api/Home";
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
  goodData:any=[];
  @observable
  googDetailData:any=[];
  @action
  async homeData() {
    let res: any = await homeData();
    this.data = res;
  }
  @action
  async brandList(id: number) {
    let res: any = await brandList({ id });
    this.brandData = res.brand;
  }
  @action 
  async goodListData(){
       let res:any = await goodListData();
       this.goodData=res.data
  }
  @action
  async googDetail(id:number){
    let res:any=await googDetail({id})
    this. googDetailData=res.info
    console.log(this. googDetailData)
  }
}
