import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
const Header = () => {
  return (
    <div className={styles.head}>
      <div className={styles.jump}></div>
      <div className={styles.jump_zhuizong}></div>
      <div className={styles.bottom}>
        <p className={styles.qs}>数据来源：国家及各地卫健委每日信息发布</p>
      </div>
    </div>
  );
};
export default Header;
