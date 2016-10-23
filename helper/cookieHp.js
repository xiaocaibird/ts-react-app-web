export var cookieHp;
(function (cookieHp) {
    cookieHp.setValue = (name, value, Days, isForever) => {
        if (isForever)
            Days = 300000;
        let exp = null;
        if (Days) {
            exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        }
        document.cookie = name + "=" + encodeURIComponent(value) + (exp == null ? "" : (";expires=" + exp.toUTCString()));
    };
    cookieHp.getValue = (name) => {
        const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        const arr = document.cookie.match(reg);
        if (arr)
            return decodeURIComponent(arr[2]);
        else
            return null;
    };
    cookieHp.removeValue = (name) => {
        cookieHp.setValue(name, '', -1000);
    };
})(cookieHp || (cookieHp = {}));
