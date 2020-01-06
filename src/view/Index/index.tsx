import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.css'
const Index: React.FC = () => {
    return <>
        <footer>
            <NavLink to='/main/home' >
                <i className="iconfont icon-caidaniconshouyehui"></i>
                <span>首页</span>
            </NavLink>
            <NavLink to='/main/subject'>
                <i className="iconfont icon-clone"></i>
                <span>专题</span>
            </NavLink>
            <NavLink to='/main/classify'>
                <i className="iconfont icon-sort"></i>
                <span>分类</span>
            </NavLink>
            <NavLink to='/main/cart'>
                <i className="iconfont icon-cart"></i>
                <span>购物车</span>
            </NavLink>
            <NavLink to='/main/my'>
                <i className="iconfont icon-mine"></i>
                <span>我的</span>
            </NavLink>
        </footer>
    </>
}
export default Index;  