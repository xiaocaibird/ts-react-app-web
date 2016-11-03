"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ts_react_app_infrastructure_1 = require('ts-react-app-infrastructure');
var helper_1 = require('../../helper');
var AWebNavigation = (function (_super) {
    __extends(AWebNavigation, _super);
    function AWebNavigation() {
        _super.apply(this, arguments);
    }
    AWebNavigation.prototype.push = function (route) {
        this.navigator.push(route);
    };
    AWebNavigation.prototype.replace = function (route) {
        this.navigator.replace(route);
    };
    AWebNavigation.prototype.resetTo = function (route) {
        this.replace(route);
    };
    AWebNavigation.prototype.jumpTo = function (route) {
        this.push(route);
    };
    AWebNavigation.prototype.pop = function () {
        this.back();
    };
    AWebNavigation.prototype.back = function () {
        this.navigator.goBack();
    };
    AWebNavigation.prototype.forward = function () {
        this.navigator.goForward();
    };
    AWebNavigation.prototype.toEntry = function (isReset) {
        if (isReset === void 0) { isReset = true; }
        if (isReset)
            this.resetTo(this.entryScene);
        else
            this.jumpTo(this.entryScene);
    };
    AWebNavigation.prototype.toLogin = function (isReset) {
        if (isReset === void 0) { isReset = true; }
        if (isReset)
            this.resetTo(this.loginScene);
        else
            this.jumpTo(this.loginScene);
    };
    AWebNavigation.prototype.reload = function (forcedReload) {
        if (forcedReload === void 0) { forcedReload = false; }
        window.location.reload(forcedReload);
    };
    AWebNavigation.prototype.isEntry = function () {
        var nowUrl = helper_1.strHp.trim(window.location.hash.toLowerCase());
        var s = ('#' + this.entryScene).toLowerCase();
        if (nowUrl != '' && nowUrl != '#/' && nowUrl != '#' && nowUrl.indexOf(s) == -1) {
            return false;
        }
        return true;
    };
    AWebNavigation.prototype.openUrl = function (url, target) {
        if (target === void 0) { target = '_top'; }
        return window.open(url, target);
    };
    return AWebNavigation;
}(ts_react_app_infrastructure_1.ANavigation));
exports.AWebNavigation = AWebNavigation;
