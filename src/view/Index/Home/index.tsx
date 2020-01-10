import React from 'react';
import './Home.css'
const Home:React.FC = () => {
    return (
        <div className='wrap-home'>
            <div className='banner'>
                <img src="http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg" alt=""/>
            </div>
            <div className='channelWrap'>
                <a href="#/categorys/1005000" className='channelItem'>
                   
                        <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                        <div>居家</div>
                   
                    
                </a>
                <a href="#/categorys/1005000" className='channelItem'>
                    <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                    <div>居家</div>
                </a>
                <a href="#/categorys/1005000" className='channelItem'>
                    <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                    <div>居家</div>
                </a>
            </div>
            <div className='brandBox'>
                <div className='brandTitle'>品牌制造商直供</div>
                <div className='brandWrap'>
                    <a href="#/brandDetail/1024000" className='brandItem'>
                        <div className='brandItemName'>WMF制造商</div>
                        <div className='brandItemMinPrice'>1de</div>
                        <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/abcfa79205679db51198adc19c184dd1.jpg" alt=""/>
                    </a>
                    
                    <a href="#/brandDetail/1024000" className='brandItem'>
                        <div className='brandItemName'>WMF制造商</div>
                        <div className='brandItemMinPrice'>qwdq</div>
                        <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/4ea3f1e60dd77c45c218e503d721a1ed.jpg" alt=""/>
                    </a>
                    <a href="#/brandDetail/1024000" className='brandItem'>
                        <div className='brandItemName'>WMF制造商</div>
                        <div className='brandItemMinPrice'></div>
                        <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg" alt=""/>
                    </a>
                    
                    <a href="#/brandDetail/1024000" className='brandItem'>
                        <div className='brandItemName'>WMF制造商</div>
                        <div className='brandItemMinPrice'></div>
                        <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/b5cd73d3b310bad02539412f064d4ea1.jpg" alt=""/>
                    </a>
                </div>
                
               
            </div>

            <div className='newGoodsBox'>
                <div className='newGoodsTitle'>新品首发</div>
                <div className='newGoodsWrap'>
                    <a href="#/goods/1116011" className='newGoodsItem'>
                        <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt=""/>
                        <div className='newGoodsName'>蔓越莓曲奇 200克</div>
                        <div className='newGoodsPrice'>￥36</div>
                    </a>
                    <a href="#/goods/1116011" className='newGoodsItem'>
                        <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt=""/>
                        <div className='newGoodsName'>蔓越莓曲奇 200克</div>
                        <div className='newGoodsPrice'>￥36</div>
                    </a>
                    <a href="#/goods/1116011" className='newGoodsItem'>
                        <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt=""/>
                        <div className='newGoodsName'>蔓越莓曲奇 200克</div>
                        <div className='newGoodsPrice'>￥36</div>
                    </a>
                    <a href="#/goods/1116011" className='newGoodsItem'>
                        <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt=""/>
                        <div className='newGoodsName'>蔓越莓曲奇 200克</div>
                        <div className='newGoodsPrice'>￥36</div>
                    </a>
                </div>
            </div>

            <div className='hotGoodsBox'>
                <div className="hotGoodsTitle">人气推荐</div>
                <div className='hotGoodsWrap'>
                    <a href="#/goods/1006013" className='hotGoodsItem'>
                         <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt=""/>
                         <div className='hotGoodsInfos'>
                             <div className='hotGoodsName'>双宫茧桑蚕丝被 空调被</div>
                             <div className='hotGoodsInfo'>一级桑蚕丝，吸湿透气柔软</div>
                             <div className='hotGoodsPrice'>￥65</div>
                         </div>
                    </a>
                    <a href="#/goods/1006013" className='hotGoodsItem'>
                         <img className='imgLazyload loadEnd' src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt=""/>
                         <div className='hotGoodsInfos'>
                             <div className='hotGoodsName'>双宫茧桑蚕丝被 空调被</div>
                             <div className='hotGoodsInfo'>一级桑蚕丝，吸湿透气柔软</div>
                             <div className='hotGoodsPrice'>￥65</div>
                         </div>
                    </a>
                </div>
            </div>

            <div className='topGoodsBox'>
                <div className='topGoodsTitle'>专题精选</div>
                <div className='topGoodsWrap'></div>
            </div>

            <div className='cateGoryBox'></div>
        </div>
    );
};

export default Home;