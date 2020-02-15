import React, { useEffect } from "react";
import "./brandDetai.css";
import { withRouter,useHistory } from "react-router-dom";
import useStore from "../../../utils/useStore";
import { useObserver } from "mobx-react-lite";
interface itType{
  id:number,
  name:string,
  list_pic_url:string,
  retail_price:string
}

const BrandDetai: React.FC = (props: any) => {
  let history:any=useHistory()
  let id = props.location.state;
  //    console.log()
  let store = useStore();
  let { Home } = store;
  useEffect(() => {
    Home.brandList(id);
    Home.goodListData()
  }, []);
  let goBack:any=()=>{
        history.go(-1)
  }
  return useObserver(() => (
    <div className="brandDetailWrap">
      <div className="bannerTitle">
        <i onClick={()=>goBack()}>&lt;</i>
        <span>{Home.brandData.name}</span>
        <i></i>
      </div>
      <div className="bannerPic">
        <img
          src={Home.brandData.list_pic_url}
          alt=""
        />
      </div>
      <div className="breadDesc">
        {Home.brandData.simple_desc}
      </div>
      <div className="goodListWrap">
        {
         Home.goodData.map((item:itType)=>{
         return <a key={item.id} className='goodItem' href="#">
                  <img className='goodPic' src={item.list_pic_url} alt=""/>
                  <div className="goodName">{item.name}</div>
                  <div className="goodPrice">￥{item.retail_price}</div>
                </a>
         })
        }        
      </div>
    </div>

  ));
      }
     

export default withRouter(BrandDetai)
