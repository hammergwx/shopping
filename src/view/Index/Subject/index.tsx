import React ,{useEffect}from 'react';
import './subject.css'
import useStore from '../../../utils/useStore'
import {useObserver} from 'mobx-react-lite'

export default () => {
    let store =useStore();
    let {Subj} =store;
    useEffect(()=>{
       Subj.Sub()
    },[])

    return useObserver(()=>(
    <div className='wrap-sub'> 
        <a  className='topicItem' href="#/topicDetail/314">
            <img src="https://yanxuan.nosdn.127.net/14943267735961674.jpg" alt="" className='imgLazyload loadEnd' />
            <div className='topicItemTitle'>关爱他成长的每一个足迹</div>
            <div className='topicItemSubtitle'>专业运动品牌同厂，毛毛虫鞋买二送一</div>
            <div className='topicItemPrice'>55.9元</div>
        </a>
        <a  className='topicItem' href="#/topicDetail/314">
            <img src="https://yanxuan.nosdn.127.net/14942996754171334.jpg" alt="" className='imgLazyload loadEnd' />
            <div className='topicItemTitle'>关爱他成长的每一个足迹</div>
            <div className='topicItemSubtitle'>专业运动品牌同厂，毛毛虫鞋买二送一</div>
            <div className='topicItemPrice'>0</div>
        </a>
        <a  className='topicItem' href="#/topicDetail/314">
            <img src="https://yanxuan.nosdn.127.net/14939843143621089.jpg" alt="" className='imgLazyload loadEnd' />
            <div className='topicItemTitle'>关爱他成长的每一个足迹</div>
            <div className='topicItemSubtitle'>专业运动品牌同厂，毛毛虫鞋买二送一</div>
            <div className='topicItemPrice'>70.0元</div>
        </a>
   </div>
    ))
};


