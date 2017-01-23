'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('./../npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('./../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('./../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('./../npm/babel-runtime/helpers/createClass.js');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('./../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('./../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _common = require('./../utils/common.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_wepy$page) {
    (0, _inherits3.default)(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            "navigationBarTitleText": "首页"
        }, _this.components = {
            // toast: Toast
        }, _this.data = {
            banners: [],
            forTrips: []
        }, _this.methods = {}, _this.events = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Index, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var _this2 = this;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                try {
                                    (0, _common.request)('getProjectColumnList', {
                                        pageIndex: 1,
                                        pageSize: 10,
                                        projectColumnCode: _common.globalData.get('projectColumnCode')
                                    }, function (res) {
                                        var list = res.dataList.columnImgsInfoList;
                                        _this2.banners = list.map(function (item) {
                                            return {
                                                url: item.picUrl,
                                                link: 'https://www.baidu.com'
                                            };
                                        });
                                    });

                                    (0, _common.request)('getProjectInfoForTrips', {
                                        pageIndex: 1,
                                        pageSize: 5,
                                        projectColumnCode: _common.globalData.get('projectColumnCode')
                                    }, function (res) {
                                        console.log(res.dataList);
                                        _this2.forTrips = res.dataList;
                                    }, function (err) {
                                        console.log(err);
                                    });

                                    (0, _common.request)('getProjectInfoForInteract', {
                                        pageIndex: 1,
                                        pageSize: 5,
                                        projectColumnCode: _common.globalData.get('projectColumnCode')
                                    }, function (res) {
                                        console.log(res.dataList);
                                        _this2.forInteracts = res.dataList;
                                    });
                                } catch (error) {
                                    console.error(error.stack);
                                }

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);
    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index));
