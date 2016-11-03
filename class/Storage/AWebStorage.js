"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ts_react_app_infrastructure_1 = require('ts-react-app-infrastructure');
var AWebStorage = (function (_super) {
    __extends(AWebStorage, _super);
    function AWebStorage() {
        _super.apply(this, arguments);
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
