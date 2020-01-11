import React, { useEffect } from "react";
import useStore from "../../../utils/useStore";
import { useObserver } from "mobx-react-lite";
import "./Home.css";
import {Carousel,WingBlank} from 'antd-mobile'
import Item from "antd-mobile/lib/popover/Item";
const Home: React.FC = () => {
  let store = useStore();
  let { Home } = store;
  useEffect(() => {
    Home.homeData();
  }, []);
  return useObserver(() => (
    <div className="wrap-home">

      <div className="banner" >
          <WingBlank >
            <Carousel
              autoplay={true}
              infinite
            >
              {Home.data.banner.map(val => (
                  <img
                    src={val.image_url}
                    alt=""
                    style={{ width: '100%',height:'200px', verticalAlign: 'top' }}
                  />
              ))}
            </Carousel>
          </WingBlank>
      </div>
              
      <div className="channelWrap">
        {Home.data.channel.map((item, index) => {
          return (
            <a key={index} href="#" className="channelItem">
              <img className="imgLazyload loadEnd" src={item.icon_url} alt="" />
              <div>{item.name}</div>
            </a>
          );
        })}
      </div>

      <div className="brandBox">
        <div className="brandTitle">品牌制造商直供</div>
        <div className="brandWrap">
          {Home.data.brandList.map((item, index) => {
            return (
              <a key={index} href="#/brandDetail/1024000" className="brandItem">
                <div className="brandItemName">{item.name}</div>
                <div className="brandItemMinPrice">{item.floor_price}</div>
                <img
                  className="imgLazyload loadEnd"
                  src={item.new_pic_url}
                  alt=""
                />
              </a>
            );
          })}
        </div>
      </div>

      <div className="newGoodsBox">
        <div className="newGoodsTitle">新品首发</div>
        <div className="newGoodsWrap">
          {Home.data.newGoodsList.map((item, index) => {
            return (
              <a key={index} href="#/goods/1116011" className="newGoodsItem">
                <img
                  className="imgLazyload loadEnd"
                  src={item.list_pic_url}
                  alt=""
                />
                <div className="newGoodsName">{item.name}</div>
                <div className="newGoodsPrice">￥{item.retail_price}</div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="hotGoodsBox">
        <div className="hotGoodsTitle">人气推荐</div>
        <div className="hotGoodsWrap">
          {Home.data.hotGoodsList.map((item, index) => {
            return (
              <a key={index} href="#/goods/1006013" className="hotGoodsItem">
                <img
                  className="imgLazyload loadEnd"
                  src={item.list_pic_url}
                  alt=""
                />
                <div className="hotGoodsInfos">
                  <div className="hotGoodsName">{item.name}</div>
                  <div className="hotGoodsInfo">{item.goods_brief}</div>
                  <div className="hotGoodsPrice">￥{item.retail_price}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="topGoodsBox">
        <div className="topGoodsTitle">专题精选</div>
        <div className="topGoodsWrap">
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay={false}
          infinite
        >
          {Home.data.topicList.map((val, index) => (
            <a
              key={index}
              href="#"
            >
              <img
                src={val.item_pic_url}
                alt=""/>
               <p>
               <span className='title'>{val.title}</span>
                <span className='price'>￥{val.price_info}元起</span>
               </p>
            </a>
          ))}
        </Carousel>
        </div>
      </div>

      <div className="cateGoryBox">
        <div className="itemsBox">
          <div className="cateGoryName">居家</div>
          <a href="#">
            {/* <img src="" alt=""/> */}
          </a>
        </div>
      </div>
    </div>
  ));
};
export default Home;
