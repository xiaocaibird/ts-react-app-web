"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts_react_app_infrastructure_1 = require("ts-react-app-infrastructure");
var AWebNavigation = (function (_super) {
    tslib_1.__extends(AWebNavigation, _super);
    function AWebNavigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWebNavigation.prototype.push = function (route, state) {
        if (typeof route === 'object')
            this.navigator.push(route);
        else {
            this.navigator.push(route, state);
        }
    };
    AWebNavigation.prototype.replace = function (route, state) {
        if (typeof route === 'object')
            this.navigator.push(route);
        else {
            this.navigator.push(route, state);
        }
    };
    AWebNavigation.prototype.resetTo = function (route, state) {
        this.replace(route, state);
    };
    AWebNavigation.prototype.jumpTo = function (route, state) {
        this.push(route, state);
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
        var nowUrl = window.location.hash.toLowerCase().trim();
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
