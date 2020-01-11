import React from 'react'
import Classift from './moudel/Classify'//定义跟路径
import Home from './moudel/Home';
import Subj from './moudel/subject'
import Login from './moudel/Login'
import Cart from './moudel/Cart'
export default {
    Classift: new Classift(),
    Subj: new Subj(),
    Home:new Home(),
    Login: new Login(),
    Cart: new Cart()
}
