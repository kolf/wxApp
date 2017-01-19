const API_ROOT = 'https://wx.eqiying.com:8000';

import {globalData} from './common.js';

const request = (url, data, success, error, method) => {
    const tokenPamrs = globalData.get('tokenPamrs');
    wx.showToast({title: '请求中...', icon: 'loading'});
    wx.request_bak({
        url: API_ROOT + '/resourceMain',
        method: method || 'GET',
        data: {
            url,
            tokenPamrs: JSON.stringify(tokenPamrs),
            urlPamrs: JSON.stringify(data)
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: (res) => {
            const {data: {isSuccess, retmsg, data}} = res;
            if(isSuccess){
                globalData.set('tokenPamrs', {
                    "token": data.token
                });
                wx.hideToast();
                success && success(data);
            }
        },
        fail: (res) => {
            error(res)
        },
        complete: (res) => {

        }
    })
};

const getProjectColumnList = (data, success, error) => request('getProjectColumnList', data, success, error);
const getProjectInfoForTrips = (data, success, error) => request('getProjectInfoForTrips', data, success, error);
const getProjectInfoForInteract = (data, success, error) => request('getProjectInfoForInteract', data, success, error);

export {
    getProjectColumnList,
    getProjectInfoForTrips,
    getProjectInfoForInteract
};
