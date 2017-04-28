"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appHp;
(function (appHp) {
    appHp.isDebug = function () {
        return process.env.NODE_ENV !== 'production';
    };
})(appHp = exports.appHp || (exports.appHp = {}));
