import {request} from "@/network/detaliserver";

export function getdetaildata(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}
export class Goods{
    constructor(itemInfo,columns,services) {
        this.desc=itemInfo.title
        this.title=itemInfo.desc
        this.lPrice =itemInfo.lowNowPrice
        this.newPrice =itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discount =itemInfo.discountDesc
        this.columns =columns
        this.discountBgColor=itemInfo.discountBgColor
        this.services=services
    }
}
