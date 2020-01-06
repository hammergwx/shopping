import React from 'react'
import RouterView from './RouterView'
import Index from '../view/index'
import Cart from "../view/Index/Cart"
import My from "../view/Index/My"

export default {
    routes: [{
        path: '/login',
        component: ()=><p>登陆页面</p>
    },{
        path: '/main',
        component: (props:any)=>(<>
            <Index/>
            <RouterView routes={props.routes}></RouterView>
        </>),
        children: [{
            path: '/main/home',
            component: ()=><p>首页</p>
        },{
            path: '/main/classify',
            component: ()=><p>分类</p>
        },{
            path: '/main/cart',
            component: ()=><Cart/>
        },{
            path: '/main/my',
            component: ()=><My/>
        }]
    },{
        Redirect: '*',
        path: '/login'
    }]
}
