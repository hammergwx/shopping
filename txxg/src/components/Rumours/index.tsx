import React, { useState, useEffect } from "react";
import { getTruth } from "../../services/index";
import styles from "./index.module.scss";
interface ProType {
  provinceName: string;
  citys: any[];
  cityCnt: number;
}

const Rumours = () => {
  // 定义全国医院数据
  let [truth, setTruth] = useState([]);

  // 获取全国医院数据
  useEffect(() => {
    getTruth().then((res: any) => {
      console.log("res...", res);
      res = res.data;
    //   if(res.code == 0){
    //     //   setProvinces(res.args.rsp.provinces);
    //   }
    });
  }, []);
 
  return (
    <div className={styles.rumor}>
      <div className={styles.sectionTitle}>
        辟谣信息
        <a href="https://vp.fact.qq.com/home">
          <div className={styles.rumor_more}></div>
        
        </a>
      </div>
        <div className={styles.rumor_card}>
        <div className={styles.rumor_icon}></div>
        <div className={styles.rumor_title}>
          来自抗击疫情一线消息，李留树博士刚从武汉打来电话
        </div>
        <div className={styles.rumor_content}>
          较真团队向洛阳新区人民医院相关人士求证（李留树博士2019年加盟了该医院），该相关人士联系了李留树博士的助理，助理称：李博士目前一直在北京，没有去武汉，网上流传的话也不是李博士说的。
        </div>
        <a href="https://vp.fact.qq.com/home">
          <div className={styles.rumor_look}>查看详情</div>
        
        </a>
        <div className={styles.rumor_fake_img}></div>
      </div>
      
    </div>
  );
};

export default Rumours;