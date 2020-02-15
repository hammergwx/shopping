import React, { useState, useEffect } from "react";
import { getProvinceNews } from "../../services/index";
import { AreaType } from "../../utils/types";
import styles from './index.module.scss'
interface ProvinceType {
  [key: string]: string;
}
interface ItemType {
  title: string;
  publish_time: string;
  news_url: string;
  cms_id: string;
}
const ProvinceList: ProvinceType = {
  hb: "湖北",
  zj: "浙江",
  gd: "广东",
  henan: "河南",
  hn: "湖南",
  ah: "安徽",
  jiangxi: "江西",
  cq: "重庆",
  jiangsu: "江苏",
  cd: "四川",
  sd: "山东",
  bj: "北京",
  sh: "上海",
  fj: "福建",
  heilongjiang: "黑龙江",
  xian: "陕西",
  guangxi: "广西",
  hebei: "河北",
  yn: "云南",
  hainan: "海南",
  ln: "辽宁",
  shanxi: "山西",
  tj: "天津",
  guizhou: "贵州",
  gansu: "甘肃",
  jilin: "吉林",
  neimenggu: "内蒙古",
  ningxia: "宁夏",
  xinjiang: "新疆",
  hk: "香港",
  qinghai: "青海",
  taiwan: "台湾",
  macau: "澳门",
  xizang: "西藏"
};
const Quick = (props: { areaTree: AreaType[] }) => {
  let [province, setProvince] = useState<string>("hb");
  let [items, setItems] = useState<ItemType[]>([]);

  let changeArea = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProvince(e.target.value);
    getNews();
  };

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    getProvinceNews(province).then((res: any) => {
      res = res.data;
      if (res.errno === 0) {
        setItems(res.data.items);
      }
    });
  };

  console.log("news...", items, props.areaTree);

  let curIndex = props.areaTree.findIndex(
    item => item.name === ProvinceList[province]
  );
  let curPro = props.areaTree[curIndex];
  // 拼接各省份选项
  const provinceHtml = [];
  for (let key in ProvinceList) {
    provinceHtml.push(
      <option key={ProvinceList[key]} value={key}>
        {ProvinceList[key]}
      </option>
    );
  }
  return (
    <div className={styles.quick_page}>
      <div className={styles.tab_top}>
        <h3>
          <span>{ProvinceList[province]}</span>
          疫情速报
        </h3>
        <select
          id="select-area"
          className={styles.area_change}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => changeArea(e)}
        >
          <option value="hb">切换城市</option>
          {provinceHtml}
        </select>
      </div>
      <div className={styles.tab_box}>
            <div className={styles.tab_item}>
              <div className={styles. add}>{curPro && curPro.today.confirm}</div>
              <div className={styles.text}>新增确诊</div>
            </div>
            <div className={styles.tab_item}>
              <div className={styles. confirm}>{curPro && curPro.total.confirm}</div>
              <div className={styles.text}>累计确诊</div>
            </div>
            <div className={styles.tab_item}>
              <div className={styles. heal}>{curPro && curPro.total.heal}</div>
              <div className={styles.text}>治愈人数</div>
            </div>
            <div className={styles.tab_item}>
              <div className={styles. dead}>{curPro && curPro.total.dead}</div>
              <div className={styles.text}>死亡人数</div>
            </div>
          </div>
          <div className={styles.tab_share_box} id="tab-share-box">
            <div className={styles.tab_share_btn} id="tab-share-btn">分享<span className="tab-name share-tab-name taplist-btn">{ProvinceList[province]}</span>数据</div>
            <div className={styles.tab_look_btn} id="tab-look-btn">关注<span className="tab-name btn-tab-name taplist-btn">{ProvinceList[province]}</span>疫情
            </div>
          </div>
    </div>
  );
};
export default Quick;
