import React, { useState, useEffect } from "react";
import { getTrace } from "../../services/index";
import styles from "./index.module.scss";
interface TraceType {
  time: string;
  create_time: string;
  source: string;
  desc: string;
  title: string;
}

const News = () => {
  // 定义最新进展
  let [trace, setTrace] = useState<TraceType[]>([]);

  // 获取最新进展数据
  useEffect(() => {
    getTrace()
      .then((res: any) => {
        let data = JSON.parse(res.data) as TraceType[];
        data.sort((a, b) => {
          if (a.time > b.time) {
            return -1;
          } else {
            return 1;
          }
        });
        setTrace(data);
      })
      .catch(e => {
        console.log("e...", e);
      });
  }, []);

  console.log("trace...", trace);
  return (
    <>
      <div className={styles.sectionTitle}>
        最新进展
        <div className={styles.hotzhuizhong}>
          <div>
            <span className={styles.timelineMore}></span>
          </div>
        </div>
      </div>
      {
         trace.map((item,index)=>{
            return <div className={styles.singleNew} key={index}>
            <div className={styles.timeIcon}></div>
            <div className={styles.times}>
              <span className={styles.pass}>{item.time}</span>
              <div className={styles.newest}></div>
            </div>
            <div className={styles.news_box}>
              <div className={styles.title}>{item.title}</div>
         <div className={styles.desc}>{item.desc}</div>
              <div className={styles.source}>来源：{item.source}</div>
            </div>
          </div>
          })
      }
    </>
  );
};

export default News;
