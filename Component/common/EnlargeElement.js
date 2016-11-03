"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var base_1 = require('../base');
var _1 = require('./');
var helper_1 = require('../../helper');
var EnlargeElement = (function (_super) {
    __extends(EnlargeElement, _super);
    function EnlargeElement(props) {
        _super.call(this);
        this.state = {
            show: props.show
        };
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
        var _a = this.props.clickMaskLayerToHide, clickMaskLayerToHide = _a === void 0 ? true : _a;
        var _b = this.state.show, show = _b === void 0 ? false : _b;
        var hide = show ? null : styles.hide;
        return React.createElement("div", {style: helper_1.objHp.assignNewObj(styles.div, hide)}, 
            React.createElement(_1.MaskLayer, {onClick: clickMaskLayerToHide ? this.hide : undefined}), 
            React.createElement(_1.Centering, null, this.props.children));
    };
    return EnlargeElement;
}(base_1.baseWebComponent));
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
