"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts_react_app_infrastructure_1 = require("ts-react-app-infrastructure");
var Factory_1 = require("../Factory");
var AWebApp = (function (_super) {
    tslib_1.__extends(AWebApp, _super);
    function AWebApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWebApp.prototype.reset = function (msg, callback) {
        var _this = this;
        if (msg === void 0) { msg = '请求超时！请稍后刷新页面！'; }
        Factory_1.WebFactory.Prompt.warningPopUp(msg, undefined, function () {
            if (typeof callback === 'function')
                callback();
            _this.clearState();
            if (!Factory_1.WebFactory.Navigation.isEntry()) {
                Factory_1.WebFactory.Navigation.toEntry();
                Factory_1.WebFactory.Navigation.reload();
            }
            else {
                Factory_1.WebFactory.Navigation.reload();
            }
        });
    };
    return AWebApp;
}(ts_react_app_infrastructure_1.AApp));
exports.AWebApp = AWebApp;
