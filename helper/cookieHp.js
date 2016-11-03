"use strict";
var cookieHp;
(function (cookieHp) {
    cookieHp.setValue = function (name, value, Days, isForever) {
        if (isForever)
            Days = 300000;
        var exp = null;
        if (Days) {
            exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        }
        document.cookie = name + "=" + encodeURIComponent(value) + (exp == null ? "" : (";expires=" + exp.toUTCString()));
    };
    cookieHp.getValue = function (name) {
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        var arr = document.cookie.match(reg);
        if (arr)
            return decodeURIComponent(arr[2]);
        else
            return null;
    };
    cookieHp.removeValue = function (name) {
        cookieHp.setValue(name, '', -1000);
    };
})(cookieHp = exports.cookieHp || (exports.cookieHp = {}));
