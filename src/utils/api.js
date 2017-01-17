const API_ROOT = 'https://wx.eqiying.com:8000';

const app = getApp();

const request = (url, data, success, error, method) => {
    const {tokenPamrs} = app.$app.globalData;
    wx.showToast({title: '请求中...', icon: 'loading'});
    wx.request({
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
            success(res);
            wx.hideToast()
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
