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
                                return <div onClick={()=>{Classift.catalogCurrent(item.id)}}  className='barItem'  key={index}>{item.name}</div>
                            })
                        }
                    </div>
                    <div className="c-right">
                    <div className="rightBanner">
                            <img src={Classift.currentBan} alt=""/>
                        </div>
                        <div className="rightTitle">
                            <span>-  {Classift.currentTitle}分类  -</span>                           
                        </div>    
                        <div className='subCategory'> 
                      {
                          Classift.goodList.length?
                          Classift.goodList.map((item,index)=>{
                              return <a key={index} href="#" className='subCategoryItem'>
                              <img className='imgLazyload loadEnd' src={item.wap_banner_url} alt=""/>
                          <div className='subCategoryItemName'>{item.name}</div>
                          </a>
                          }):Classift.arr.map((item,index)=>{
                            return <a key={index} href="#" className='subCategoryItem'>
                            <img className='imgLazyload loadEnd' src={item.wap_banner_url} alt=""/>
                        <div className='subCategoryItemName'>{item.name}</div>
                        </a>
                        })
                      }
                        </div>
                    </div>
                </div>
            </div>
       
    ));
};

export default Classify;