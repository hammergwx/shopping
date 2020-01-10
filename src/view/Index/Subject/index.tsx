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
       
            {
                Subj.subjectList.map((item,index)=>{
                    return (
                        <a  className='topicItem' href="#/topicDetail/314" key={index}>
                        <img src={item.scene_pic_url} alt="" className='imgLazyload loadEnd' />
                        <div className='topicItemTitle'>{item.title}</div>
                        <div className='topicItemSubtitle'>{item.subtitle}</div>
                        <div className='topicItemPrice'>{item.price_info}元</div>
                        </a>
                    )
                })
            }
       
   </div>
    ))
};