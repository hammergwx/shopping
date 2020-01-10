import { observable, action } from 'mobx'
import { CartFn } from '../../api/Cart'

export default class CartData {
    @observable
    cartData: any = {}

    @action
    async CartFn() {
        let obj = { "x-nideshop-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTYzOTUxMjg1fQ.qbMBV1MycS7iq8u0uhtmmH7RjOCwjeLrBSvtNaxGMRk" };
        let res: any = await CartFn(obj);
        console.log(res)
        this.cartData = res;
    }
}