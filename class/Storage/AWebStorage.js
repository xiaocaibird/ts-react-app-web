"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts_react_app_infrastructure_1 = require("ts-react-app-infrastructure");
var AWebStorage = (function (_super) {
    tslib_1.__extends(AWebStorage, _super);
    function AWebStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWebStorage.prototype.clear = function () {
        if (window.localStorage)
            window.localStorage.clear();
    };
    AWebStorage.prototype.getValue = function (key) {
        if (window.localStorage)
            return window.localStorage[key];
        return null;
    };
    AWebStorage.prototype.setValue = function (key, value) {
        if (window.localStorage)
            window.localStorage.setItem(key, value);
    };
    AWebStorage.prototype.remove = function (key) {
        if (window.localStorage)
            window.localStorage.removeItem(key);
    };
    return AWebStorage;
}(ts_react_app_infrastructure_1.AStorage));
exports.AWebStorage = AWebStorage;
