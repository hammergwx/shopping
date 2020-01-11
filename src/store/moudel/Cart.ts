import { observable, action } from 'mobx'
import { cartType } from '../types/Cart'
import { CartFn } from "../../api/Cart"

export default class CartData {
    @observable
    list: cartType[] = [];
    @action
    async CartFn() {
        let res: any = await CartFn();
        this.list = res;
    }
} 