"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts_react_app_infrastructure_1 = require("ts-react-app-infrastructure");
var AWebDevice = (function (_super) {
    tslib_1.__extends(AWebDevice, _super);
    function AWebDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AWebDevice.prototype, "UniqueID", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "SystemName", {
        get: function () {
            if (!this._systemName) {
                this._systemName = 'PC';
                for (var v = 0; v < Agents.length; v++) {
                    if (navigator.userAgent.indexOf(Agents[v]) > 0) {
                        this._systemName = Agents[v];
                        break;
                    }
                }
                if (this._systemName === 'iPhone') {
                    this._systemName = 'iOS';
                }
            }
            return this._systemName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "AppVersion", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "ReadableVersion", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "DeviceModel", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "Manufacturer", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "DeviceBrand", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "DeviceId", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "SystemVersion", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "BundleId", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "BuildNumber", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "DeviceName", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "UserAgent", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "DeviceLocale", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "DeviceCountry", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "Timezone", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "InstanceID", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "IsIOS", {
        get: function () {
            if (this._isIOS == null) {
                this._isIOS = this.SystemName.toLowerCase() === 'ios' ? true : false;
            }
            return this._isIOS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "IsAndroid", {
        get: function () {
            if (this._isAndroid == null) {
                this._isAndroid = this.SystemName.toLowerCase() === 'android' ? true : false;
            }
            return this._isAndroid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "IsPC", {
        get: function () {
            if (this._isPC == null) {
                this._isPC = this.SystemName.toLowerCase() === 'pc' ? true : false;
            }
            return this._isPC;
        },
        enumerable: true,
        configurable: true
    });
    AWebDevice.prototype.getDocumentWidth = function (type) {
        if (type === void 0) { type = 'client'; }
        if (type === 'client')
            return document.documentElement.clientWidth;
        return document.documentElement.offsetWidth;
    };
    AWebDevice.prototype.getDocumentHeight = function (type) {
        if (type === void 0) { type = 'client'; }
        if (type === 'client')
            return document.documentElement.clientHeight;
        return document.documentElement.offsetHeight;
    };
    AWebDevice.prototype.getWindowWidth = function (type) {
        if (type === void 0) { type = 'outer'; }
        if (type === 'outer')
            return window.outerWidth;
        return window.innerWidth;
    };
    AWebDevice.prototype.getWindowHeight = function (type) {
        if (type === void 0) { type = 'outer'; }
        if (type === 'outer')
            return window.outerHeight;
        return window.innerHeight;
    };
    AWebDevice.prototype.getScreenWidth = function (type) {
        if (type === void 0) { type = 'avail'; }
        if (type === 'avail') {
            return window.screen.availWidth;
        }
        return window.screen.width;
    };
    AWebDevice.prototype.getScreenHeight = function (type) {
        if (type === void 0) { type = 'avail'; }
        if (type === 'avail') {
            return window.screen.availHeight;
        }
        return window.screen.height;
    };
    AWebDevice.prototype.callPhone = function (_number) {
    };
    return AWebDevice;
}(ts_react_app_infrastructure_1.ADevice));
exports.AWebDevice = AWebDevice;
var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone");
