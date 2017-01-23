'use strict';

var _stringify = require('./../npm/babel-runtime/core-js/json/stringify.js');

var _stringify2 = _interopRequireDefault(_stringify);

var _common = require('./common.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_ROOT = 'https://wx.eqiying.com:8000';

var request = function request(url, data, _success, error, method) {
    var tokenPamrs = _common.globalData.get('tokenPamrs');
    wx.showToast({ title: '请求中...', icon: 'loading' });
    wx.request_bak({
        url: API_ROOT + '/resourceMain',
        method: method || 'GET',
        data: {
            url: url,
            tokenPamrs: (0, _stringify2.default)(tokenPamrs),
            urlPamrs: (0, _stringify2.default)(data)
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function success(res) {
            var _res$data = res.data,
                isSuccess = _res$data.isSuccess,
                retmsg = _res$data.retmsg,
                data = _res$data.data;

            if (isSuccess) {
                _common.globalData.set('tokenPamrs', {
                    "token": data.token
                });
                wx.hideToast();
                _success && _success(data);
            }
        },
        fail: function fail(res) {
            error(res);
        },
        complete: function complete(res) {}
    });
};