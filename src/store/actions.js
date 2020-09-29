// 简介更新 mutation间接更新state 提交
import {
    reqAddress,
    reqFoodTypes,
    reqShops,
    reqUserInfo
  } from '../api'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO
} from './mutations-types'
export default{
    //异步请求地址
    async getAddress ({commit,state}){
        const geohash = state.latitude + "," + state.longitude;
        const result = await reqAddress(geohash);// 发送请求
        if (result.code == 0){
            const address = result.data;
           // console.log(address)
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    async getCategorys({commit}){
        const result = await reqFoodTypes();
        if (result.code == 0){
            const foodTypes = result.data;
           // console.log(foodTypes)
            commit(RECEIVE_CATEGORYS,{foodTypes})
        }
    },
    async getShops({commit,state}) {
        const {longitude,latitude} = state;
        const result = await reqShops(longitude,latitude);// 发送请求
        if (result.code == 0){
            const shops = result.data;
            console.log(shops)
            commit(RECEIVE_SHOPS,{shops})
        }
    },
    recordUser({commit},userInfo){
        console.log(userInfo)
        commit(RECEIVE_USERINFO,{userInfo})
    },
    async getUserInfo({commit}){
        const result = await reqUserInfo();
        console.log(result)
        if(result.code==0){
            const userInfo = result.data;
            commit(RECEIVE_USERINFO,{userInfo})
        }
    }
}