import { observable, action } from 'mobx'
import { CartFn } from '../../api/Cart'

export default class CartData {
    @observable
    cartData: any = {}

    @action
    async CartFn() {
        let obj = {
            'x-nideshop-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTc4NjM4OTc5fQ.WJJ2ilYGWIO5YLYZXDoTTiTmSyYxc4H16lYQetNc9VA'
        };
        let res: any = await CartFn(obj);
        console.log(res)
        this.cartData = res;
    }
}