"use strict";
var ts_react_app_infrastructure_1 = require('ts-react-app-infrastructure');
var _WebFactory = (function () {
    function _WebFactory() {
    }
    return _WebFactory;
}());
exports.setWebFactory = function (f) {
    ts_react_app_infrastructure_1.setInfrastructureFactory(f);
    exports.WebFactory.App = f.App;
    exports.WebFactory.Storage = f.Storage;
    exports.WebFactory.Redux = f.Redux;
    exports.WebFactory.Request = f.Request;
    exports.WebFactory.Prompt = f.Prompt;
    exports.WebFactory.Navigation = f.Navigation;
    exports.WebFactory.ErrorHandler = f.ErrorHandler;
    exports.WebFactory.AsyncOperation = f.AsyncOperation;
    exports.WebFactory.Device = f.Device;
    exports.WebFactory.User = f.User;
};
exports.WebFactory = new _WebFactory();
