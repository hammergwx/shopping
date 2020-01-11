// import { loginType } from '../types/Login'
import { observable, action } from 'mobx'
import { LoginFn } from '../../api/Login'


export default class LoginData {
    @observable
    data: any = {}

    @action
    async LoginFn(params: any) {
        let res: any = await LoginFn(params);
        this.data = res;
    }
}