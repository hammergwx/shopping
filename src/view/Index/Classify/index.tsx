import React,{useEffect} from 'react';
import useStore from '../../../utils/useStore'
import './classify.css';
import {useObserver} from 'mobx-react-lite'

const Classify:React.FC = () => {
    let store=useStore();
    let {Classift} =store;
    useEffect(()=>{
        Classift.coctlogIndex()
    },[])
    return useObserver(()=>(
      
            <div className="classify">
                <div className="serachbox">
                    <input type="text" placeholder='搜索商品'/>
                </div>
                <div className="classify-content">
                    <div className="c-left">
                        {
                            Classift.list.map((item,index)=>{
                                return <div className='barItem'  key={index}>{item.name}</div>
                            })
                        }
                    </div>
                    <div className="c-right"></div>
                </div>
            </div>
       
    ));
};

export default Classify;