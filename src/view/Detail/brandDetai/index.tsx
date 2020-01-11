import React, { useEffect } from "react";
import "./brandDetai.css";
import { withRouter } from "react-router-dom";
import useStore from "../../../utils/useStore";
import { useObserver } from "mobx-react-lite";
const BrandDetai: React.FC = (props: any) => {
  let id = props.location.state;
  //    console.log()
  let store = useStore();
  let { Home } = store;
  useEffect(() => {
    Home.brandList(id);
    Home.goodListData()
  }, []);
  return useObserver(() => (
    <div className="brandDetailWrap">
      <div className="bannerTitle">{Home.brandData.name}</div>
      <div className="bannerPic">
        <img
          src={Home.brandData.list_pic_url}
          alt=""
        />
      </div>
      <div className="breadDesc">
        {Home.brandData.simple_desc}
      </div>
    </div>
  ));
};
export default withRouter(BrandDetai);
