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
            <Index />
            <RouterView routes={props.routes}></RouterView>
        </>),
        children: [{
            path: '/main/home',
            component: () => <Home />
        }, {
            path: '/main/classify',
            component: () => <Classify />
        }, {
            path: '/main/cart',
            component: () => <Cart />
        }, {
            path: '/main/my',
            component: () => <My />
        },{
            from: '/main',
            to: '/main/home'
        }]
    }, {
        from: '*',
        to: '/login'
    }]
}