import React from 'react'
import RouterView from './RouterView'
import Index from "../view/Index"
import Home from "../view/Index/Home"
import Classify from "../view/Index/Classify"
import Cart from "../view/Index/Cart"
import My from "../view/Index/My"
import Login from "../view/Login"

export default {
    routes: [{
        path: '/login',
        component: () => <Login />
    }, {
        path: '/main',
        component: (props: any) => (<>            
            <RouterView routes={props.routes}></RouterView>
            <Index />
        </>),
        children: [{
            path: '/main/home',
            component: () => <p>首页</p>
        }, {
            path: '/main/classify',
            component: () => <p>分类</p>
        }, {
            path: '/main/cart',
            component: () => <p>购物车</p>
        }, {
            path: '/main/my',
            component: () => <p>我的</p>
        }]
    }, {
        from: '*',
        to: '/login'
    }]
}