import React, { useEffect } from 'react';
import './subject.css'
import {withRouter,useHistory} from 'react-router-dom'
import useStore from '../../../utils/useStore'
import { useObserver } from 'mobx-react-lite'


const Subject: React.FC = (props:any) => {
    let history=useHistory()
    let id=props.location.state
    console.log(id);
    let store = useStore();
    let { Subj } = store;
    useEffect(() => {
        Subj.Sub()
    },[Subj])

    let jump=(item:any)=>{
        history.push({pathname:'/SubDetail',state:item.id})
    }
    return useObserver(() => (
        <>
            <div className='wrap-sub'>
                {
                    Subj.subjectList.map((item, index) => {
                        return (
                            <div className='topicItem' key={index} onClick={()=>{jump(item)}}>
                                <img src={item.scene_pic_url} alt="" className='imgLazyload loadEnd' />
                                <div className='topicItemTitle'>{item.title}</div>
                                <div className='topicItemSubtitle'>{item.subtitle}</div>
                                <div className='topicItemPrice'>{item.price_info}元</div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    ))
  
    
}
export default withRouter(Subject) ;
