"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ts_react_app_infrastructure_1 = require('ts-react-app-infrastructure');
var Factory_1 = require('../Factory');
var AWebDevice = (function (_super) {
    __extends(AWebDevice, _super);
    function AWebDevice() {
        _super.apply(this, arguments);
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
                if (this._systemName == 'iPhone') {
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
            return Factory_1.WebFactory.App.AppConfig.locatoinVersion.code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "ReadableVersion", {
        get: function () {
            return Factory_1.WebFactory.App.AppConfig.locatoinVersion.readableCode;
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
                this._isIOS = this.SystemName.toLowerCase() == 'ios' ? true : false;
            }
            return this._isIOS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "IsAndroid", {
        get: function () {
            if (this._isAndroid == null) {
                this._isAndroid = this.SystemName.toLowerCase() == 'android' ? true : false;
            }
            return this._isAndroid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AWebDevice.prototype, "IsPC", {
        get: function () {
            if (this._isPC == null) {
                this._isPC = this.SystemName.toLowerCase() == 'pc' ? true : false;
            }
            return this._isPC;
        },
        enumerable: true,
        configurable: true
    });
    AWebDevice.prototype.getWindowWidth = function (type) {
        if (type === void 0) { type = 'client'; }
        if (type == 'client')
            return document.body.clientWidth;
        return document.body.offsetWidth;
    };
    AWebDevice.prototype.getWindowHeight = function (type) {
        if (type === void 0) { type = 'client'; }
        if (type == 'client')
            return document.body.clientHeight;
        return document.body.offsetHeight;
    };
    AWebDevice.prototype.getScreenWidth = function (type) {
        if (type === void 0) { type = 'avail'; }
        if (type == 'avail') {
            return window.screen.availWidth;
        }
        return window.screen.width;
    };
    AWebDevice.prototype.getScreenHeight = function (type) {
        if (type === void 0) { type = 'avail'; }
        if (type == 'avail') {
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
