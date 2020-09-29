import Vue from "vue"
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO
} from './mutations-types'
export default {
    [RECEIVE_ADDRESS](state,{address}){//mutations 里边的函数  address 为提交时的参数
        state.address = address
    },
    [RECEIVE_CATEGORYS](state,{foodTypes}){//mutations 里边的函数  address 为提交时的参数
        state.categorys = foodTypes
       // console.log( state.categorys)
    },
    [RECEIVE_SHOPS](state,{shops}){//mutations 里边的函数  address 为提交时的参数
        state.shops = shops
       // console.log( state.categorys)
    },
    [RECEIVE_USERINFO](state,{userInfo}){//mutations 里边的函数  address 为提交时的参数
        console.log(userInfo)
        state.userInfo = userInfo
       // console.log( state.categorys)
    }
}