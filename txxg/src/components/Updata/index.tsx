import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
const Updata = () => {
  return (
    <div className={styles.updata}>
      <div className={styles.updata_title}>
        <p className={styles.d}>
          统计截至 <span>2020-02-07 10:58:40</span>{" "}
          <em>
            更新于<span>13分钟</span>前
          </em>
        </p>
      </div>
      <div className={styles.recentNumber}>
            <div className={styles.confirm}>
                <div className={styles.add}>较上日<span>+3165</span></div>
                <div className={styles.number}>31225</div>
                <div className={styles.text}>全国确诊</div>
            </div>
            <div className={styles.confirm}>
                <div className={styles.add}>较上日<span>+3165</span></div>
                <div className={styles.number}>31225</div>
                <div className={styles.text}>全国确诊</div>
            </div>
            <div className={styles.confirm}>
                <div className={styles.add}>较上日<span>+3165</span></div>
                <div className={styles.number}>31225</div>
                <div className={styles.text}>全国确诊</div>
            </div>
            <div className={styles.confirm}>
                <div className={styles.add}>较上日<span>+3165</span></div>
                <div className={styles.number}>31225</div>
                <div className={styles.text}>全国确诊</div>
            </div>
        
      </div>
    </div>
  );
};
export default Updata;
