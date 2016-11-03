"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var base_1 = require('../base');
var helper_1 = require('../../helper');
var MaskLayer = (function (_super) {
    __extends(MaskLayer, _super);
    function MaskLayer() {
        _super.apply(this, arguments);
    }
    MaskLayer.prototype.render = function () {
        return (React.createElement("div", {style: helper_1.objHp.assignNewObj(styles.opacityBg, this.props.style), onClick: this.props.onClick}));
    };
    return MaskLayer;
}(base_1.baseWebComponent));
exports.MaskLayer = MaskLayer;
var styles = {
    opacityBg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.4,
        zIndex: -1
    }
};
