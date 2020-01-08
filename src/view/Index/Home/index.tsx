import React from 'react';
import './Home.css'
const Home:React.FC = () => {
    return (
        <div className='wrap-home'>
            <div className='banner'></div>
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
        </div>
    );
};

export default Home;