import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import './index.css'
const Index: React.FC = () => {
    return (
        <div className='wrap-h'>
            <main>

            </main>
            <footer>
                <NavLink to='/main/home'>首页</NavLink>
                <NavLink to='/main/classify'>分类</NavLink>
                <NavLink to='/main/cart'>购物车</NavLink>
                <NavLink to='/main/my'>我的</NavLink>
            </footer>
        </div>
    );
}
export default Index;  