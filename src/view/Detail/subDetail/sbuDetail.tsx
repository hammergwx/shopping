import React,{useEffect} from 'react'
import '../../../iconfont/iconfont.css'
import './SubDetail.css'
import {withRouter} from 'react-router-dom'
import {useObserver} from 'mobx-react-lite'
import useStore from '../../../utils/useStore'

const SubDetail :React.FC =(props:any)=>{
    let store =useStore();
    let {Subj} =store;
    // let id=props.location.state
    console.log(props);
    console.log(Subj.DetailList);
    useEffect(()=>{
        // Subj.SubDetail(id)
    },[Subj])
      return useObserver(()=><>
            {/* <div className='noTabPageContent'>
                <div className='topicDetail'>
                    <div className='header'>
                        <div className='left'>
                            <i className='iconfont icon-i-left'></i>
                        </div>
                        <div className='title'>关爱他成长的每一个足迹</div>
                        <div className='right'></div>
                    </div>
                    <div className='topicDetailImg'>
                        <img src="//yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg" alt=""/>
                    </div>
                </div>
            </div> */}
      </>)
}


export default SubDetail