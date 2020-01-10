import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom"
import "./Login.scss";
import useStore from "../../utils/useStore"
import { useObserver } from 'mobx-react-lite'

const Login: React.FC = (props: any) => {
    let store = useStore();
    let { Login } = store;
    const [obj] = useState({
        mobile: "15323807318", password: "123456"
    });
    let { history } = props;
    useEffect(() => {
    }, [])
    return useObserver(() => (
        <div className="loginBox">
            <div className="logo">
                <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
            </div>
            <div className="loginMain">
                <div className="inputWrap onePx_bottom">
                    <input type="text" placeholder="请输入手机号码" onChange={(e) => {
                        obj.mobile = e.target.value
                    }} defaultValue={obj.mobile} />
                </div>
                <div className="inputWrap onePx_bottom">
                    <input type="password" placeholder="请输入登录密码" onChange={(e) => {
                        obj.password = e.target.value
                    }} defaultValue={obj.password} />
                </div>
                <div className="loginBtn" onClick={() => {
                    Login.LoginFn(obj)
                    const { errno, data, errmsg } = Login.loginData;
                    if (errno === 0) {
                        if ({ ...data }.mobile === obj.mobile && { ...data }.password === obj.password) {
                            history.push("/main")
                        }
                    }
                    if (errno === 1000) {
                        alert(errmsg)
                    }
                }}>
                    <span>登 录</span>
                </div>
            </div>
        </div >
    ));
};

export default withRouter(Login);