"use strict";
var tslib_1 = require("tslib");
var React = require("react");
var base_1 = require("../base");
var _1 = require("./");
var helper_1 = require("../../helper");
var EnlargeElement = (function (_super) {
    tslib_1.__extends(EnlargeElement, _super);
    function EnlargeElement(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            show: props.show
        };
        return _this;
    }
    EnlargeElement.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            show: nextProps.show
        });
    };
    EnlargeElement.prototype.hide = function () {
        this.setState({
            show: false
        });
    };
    EnlargeElement.prototype.render = function () {
        var _a = this.props.clickToHide, clickToHide = _a === void 0 ? true : _a;
        var _b = this.state.show, show = _b === void 0 ? false : _b;
        var hide = show ? null : styles.hide;
        return React.createElement("div", { style: helper_1.objHp.assignNewObj(styles.div, hide) },
            React.createElement(_1.MaskLayer, { onClick: clickToHide ? this.hide : undefined }),
            React.createElement(_1.Centering, null, this.props.children));
    };
    return EnlargeElement;
}(base_1.AWebComponent));
exports.EnlargeElement = EnlargeElement;
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
