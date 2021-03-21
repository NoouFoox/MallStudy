import {request} from "@/network/request";

export function getHomeDtat(){
    return request({
        url:'/recommend'
    })
}
