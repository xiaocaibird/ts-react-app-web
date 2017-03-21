"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var base_1 = require("../base");
var _1 = require("./");
var helper_1 = require("../../helper");
var LoadingSpinner = (function (_super) {
    tslib_1.__extends(LoadingSpinner, _super);
    function LoadingSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingSpinner.prototype.render = function () {
        var _a = this.props, _b = _a.show, show = _b === void 0 ? false : _b, imgSrc = _a.imgSrc, imgStyle = _a.imgStyle;
        var hide = show ? null : styles.hide;
        return <div style={helper_1.objHp.assignNewObj(styles.div, hide)}>
            <_1.MaskLayer />
            <_1.Centering>
                <img src={imgSrc} style={imgStyle}/>
            </_1.Centering>
        </div>;
    };
    return LoadingSpinner;
}(base_1.AWebComponent));
exports.LoadingSpinner = LoadingSpinner;
var styles = {
    div: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100000
    },
    hide: {
        zIndex: -10000,
        opacity: 0
    }
};
