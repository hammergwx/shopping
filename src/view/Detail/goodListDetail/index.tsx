import React, { useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import useStore from "../../../utils/useStore";
import "./goodDetail.css";
import { WhiteSpace, Modal, List, Button, WingBlank } from "antd-mobile";
interface itType{
    id:number,
    name:string,
    goods_number:string,
    goods_brief:string,
    list_pic_url:string,
    retail_price:number
}
const GoodDetail: React.FC = (props: any) => {
  let store = useStore();
  let { Home } = store;
  let history: any = useHistory();
  let id = props.location.state;
//   console.log(id);
  useEffect(() => {
    Home.googDetail(id)
  });
  let goBack:any=()=>{
    history.go(-1)
}
  return useObserver(()=>(
    <div className="goodWrap">
      <div className="goodDetail">
        
          <div className="goodTtle">
          <i onClick={()=>goBack()}>&lt;</i>
<span>{Home.googDetailData.name}</span>
          <i></i>
        </div>
        
        {/* <div className="goodTtle">
          <i onClick={()=>goBack()}>&lt;</i>
          <span>29838238829</span>
          <i></i>
        </div>
        <div className="goodBanner"></div>
        <div className="serviceList">
          <li>
            <span>★</span>
            <span>30天节节工</span>
          </li>
          <li>
            <span>★</span>
            <span>30天节节工</span>
          </li>
          <li>
            <span>★</span>
            <span>30天节节工</span>
          </li>
        </div>
        <div className="goodsMsgWrap">
          <div className="goodsNameTitle">趣味粉彩系列记忆棉坐垫</div>
          <div className="goodsNameSubTitle">慢回弹海绵的呵护，萌趣添彩。</div>
          <div className="goodsPriceTitle">￥49</div>
        </div>
        <div className="goodSize">
          <p></p>

          <div className="rightBox">
            <div className="px">x 0</div>
            <div className="guige">
              选择规格<i className="iconfont icon-right"></i>
            </div>
          </div>
        </div>
        <div className="goodsAttributeBox">
          <div className="goodsAttributeLine">--商品参数--</div>
          <div className="goodsAttributeList">
            <div className="goodsAttributeItem">
              <div className="attributeLabel">规格尺寸</div>
              <div className="attributeContent">方形38*38*3cm 圆形 φ38*3cm</div>
            </div>

          </div>
        </div> */}
      </div>
      <div className="goodsAttributeBox">
        <div className="goodsAttributeLine">--常见问题--</div>
        <div className="problemWrap">
          <div className="problemLabel">
            <span>√</span>购买运费如何收取？
          </div>
          <div className="problemContent">
            单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。
            (港澳台地区需满
          </div>
        </div>
        <div className="problemWrap">
          <div className="problemLabel">
            <span>√</span>使用什么快递发货？
          </div>
          <div className="problemContent">
            严选默认使用顺丰快递发货（个别商品使用其他快递），配送范围覆盖全国大部分地区（港澳台地区除
          </div>
        </div>
        <div className="problemWrap">
          <div className="problemLabel">
            <span>√</span>如何申请退货？
          </div>
          <div className="problemContent">
            1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，
          </div>
        </div>
        <div className="problemWrap">
          <div className="problemLabel">
            <span>√</span>如何开具发票？
          </div>
          <div className="problemContent">
            1.如需开具普通发票，请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以
          </div>
        </div>
      </div>
      <div className="goodsList">
        <a className="goodsItem" href="#">
          <img
            className="goodsItemImg"
            src="http://yanxuan.nosdn.127.net/eb486cfe807c4fe5696aa59cbcf1f96a.png"
            alt=""
          />
          <div className="goodsItemName">直杆三角中性笔</div>
          <div className="goodsItemPrice">￥9.9元</div>
        </a>
        <a className="goodsItem" href="#">
          <img
            className="goodsItemImg"
            src="http://yanxuan.nosdn.127.net/eb486cfe807c4fe5696aa59cbcf1f96a.png"
            alt=""
          />
          <div className="goodsItemName">直杆三角中性笔</div>
          <div className="goodsItemPrice">￥9.9元</div>
        </a>
      </div>
      {/* <div className="mask"></div> */}
    </div>
  ));
};
export default withRouter(GoodDetail);
