const app = getApp();
const API_ROOT = 'https://wx.eqiying.com:8000';

const globalData = {
    get(key){
        return app.$app.globalData[key];
    },
    set(key, value){
        Object.assign(app.$app.globalData[key], value);
    }
};

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
            error && error(res)
        },
        complete: (res) => {

        }
    })
};

export {
    globalData,
    request
}
