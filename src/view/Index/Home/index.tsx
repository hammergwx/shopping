import React, { useEffect } from "react";
import useStore from "../../../utils/useStore";
import { useObserver } from "mobx-react-lite";
import "./Home.css";
import { Carousel, WingBlank } from "antd-mobile";
import Item from "antd-mobile/lib/popover/Item";
const Home: React.FC = () => {
  let store = useStore();
  let { Home } = store;
  useEffect(() => {
    Home.homeData();
  }, []);
  return useObserver(() => (
    <div className="wrap-home">
      <div className="banner">
        <WingBlank>
          <Carousel autoplay={true} infinite>
            {Home.data.banner.map(val => (
              <img
                src={val.image_url}
                key={val.id}
                alt=""
                style={{ width: "100%", height: "200px", verticalAlign: "top" }}
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
          <Carousel
            className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={0.8}
            autoplay={false}
            infinite
          >
            {Home.data.topicList.map((val, index) => (
              <a key={index} href="#">
                <img src={val.item_pic_url} alt="" />
                <p>
                  <span className="title">{val.title}</span>
                  <span className="price">￥{val.price_info}元起</span>
                </p>
              </a>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="cateCoryWrap">
      {Home.data.categoryList.map(item => {
        return (
          <div key={item.id} className="cateGoryBox">
            <div className="cateGoryName">{item.name}</div>
            <div className="itemsBox">
              {item.goodsList.map(ite => {
                return (
                  <a key={ite.id} href="#">
                    <img
                      className="goodsItemPic"
                      src={ite.list_pic_url}
                      alt=""
                    />
                    <span className="goodsItemName"> {ite.name}</span>
                    <span className="goodsItemPrice">￥{ite.retail_price}</span>
                  </a>
                );
              })}
              <a href="#" className="duo">
                <div className="btitle">更多{item.name}好物</div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg=="
                  alt=""
                />
              </a>
            </div>
          </div>
        );
      })}
      </div>
     
    </div>
  ));
};
export default Home;
