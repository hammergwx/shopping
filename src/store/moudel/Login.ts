// import { loginType } from '../types/Login'
import { observable, action } from 'mobx'
import { LoginFn } from '../../api/Login'


export default class LoginData {
    @observable
    loginData: any = {}

    @action
    async LoginFn(params: any) {
        let res: any = await LoginFn(params);
        this.loginData = res;
    }
}