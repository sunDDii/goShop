import axios from 'axios';

// ajax请求函数模块    返回值：promise对象
export default function ajax(url, data = {}, type = "GET") {
    return new Promise(function (resolve, reject) {
        let promise;
        if (type == "GET") {
            let dataStr = "";
            Object.keys(data).forEach(key => {
                dataStr += key + "=" + data[key] + "&"
                url = url + "?" + dataStr
            })
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        promise.then(function (response) {
            // 成功了调用resolve()
            resolve(response.data)
        }).catch(function (error) {
            //失败了调用reject()
            reject(error)
        })
    })

    //return promise
}