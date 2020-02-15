import React, { useState, useEffect } from "react";
import "./App.css";
import {getDisease} from '../services/index';
import {TotalType,AreaType} from '../utils/types'
// 引入模块
import Header from "../components/Header/index";
import Updata from "../components/Updata/index";
import Map from "../components/Map/index";
import Quick from "../components/Quick/index";
import Domestic from "../components/Domestic/index";
import Foreign from "../components/Foreign/index";
import News from "../components/News/index";
import Rumours from "../components/Rumours/index";
import Hospital from "../components/Hospital/index";
import Notice from "../components/Notice/index";
import Charts from '../components/Charts/index';
const App = () => {
  // 疫情概况
  let [total, setTotal] = useState<TotalType>();
    // 疫情区域分布
    let [areaTree, setAreaTree] = useState<AreaType []>([]);
    // 每日数据
    let [dayList, setDayList] = useState([]);
    // 每日新增数据
    let [dayAddList, setDayAddList] = useState([]);
    // 全国疫情分布
    let [countryData, setCountryData] = useState([]);
  useEffect(()=>{
    getDisease().then((res:any)=>{
      res=JSON.parse(res.data)
      console.log(res,'duoshuju')
      let {chinaTotal, chinaAdd, lastUpdateTime, areaTree, chinaDayList, chinaDayAddList} = res;
      setTotal({chinaTotal, chinaAdd, lastUpdateTime});
      setAreaTree(areaTree);
      setDayList(chinaDayList)
      setDayAddList(chinaDayAddList);
      let countryData = areaTree[0].children.map((item: any)=>{
        return {
          name: item.name,
          value: item.total.confirm
        }
      })
      setCountryData(countryData);
    })
  },[])
  return (
    <div className="App">
      {/* 头部 */}
      <Header />
      {/* 最新数据更新 */}
      <Updata />
     
      {/* 绘制地图 */}
        <Map countryData={countryData}/>   
       {/* 图表 */}
       <Charts chinaDayAddList={dayAddList} chinaDayList={dayList}/>
      {/* 疫情速报 */} 
      <Quick areaTree={areaTree.length?areaTree[0].children as AreaType[]:[]}/>
      {/* 国内疫情 */}
      <Domestic />
      {/* 国外疫情 */}
      <Foreign />
      {/* 疫情的最新进展 */}
      <News />
      {/* 辟谣信息 */}
      <Rumours />
      {/* 医疗救治医院查询 */}
      <Hospital />
      {/* 防护须知 */}
      <Notice />
    </div>
  );
};

export default App;
