'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProjectInfoForInteract = exports.getProjectInfoForTrips = exports.getProjectColumnList = undefined;

var _stringify = require('./../npm/babel-runtime/core-js/json/stringify.js');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_ROOT = 'https://wx.eqiying.com:8000';
var _common = './common',
    setToken = _common.setToken;

var app = getApp();

var request = function request(url, data, _success, error, method) {
    var tokenPamrs = app.$app.globalData.tokenPamrs;

    wx.showToast({ title: '请求中...', icon: 'loading' });
    wx.request({
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
            _success(res);
            console.log(res);
            // wx.hideToast()
        },
        fail: function fail(res) {
            error(res);
        },
        complete: function complete(res) {}
    });
};

var getProjectColumnList = function getProjectColumnList(data, success, error) {
    return request('getProjectColumnList', data, success, error);
};
var getProjectInfoForTrips = function getProjectInfoForTrips(data, success, error) {
    return request('getProjectInfoForTrips', data, success, error);
};
var getProjectInfoForInteract = function getProjectInfoForInteract(data, success, error) {
    return request('getProjectInfoForInteract', data, success, error);
};

exports.getProjectColumnList = getProjectColumnList;
exports.getProjectInfoForTrips = getProjectInfoForTrips;
exports.getProjectInfoForInteract = getProjectInfoForInteract;