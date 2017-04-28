"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts_react_app_infrastructure_1 = require("ts-react-app-infrastructure");
var helper_1 = require("../../helper");
var AWebApp = (function (_super) {
    tslib_1.__extends(AWebApp, _super);
    function AWebApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWebApp.prototype.isDebug = function () {
        return helper_1.appHp.isDebug();
    };
    return AWebApp;
}(ts_react_app_infrastructure_1.AApp));
exports.AWebApp = AWebApp;
