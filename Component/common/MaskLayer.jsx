"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var base_1 = require("../base");
var helper_1 = require("../../helper");
var MaskLayer = (function (_super) {
    tslib_1.__extends(MaskLayer, _super);
    function MaskLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaskLayer.prototype.render = function () {
        return (<div style={helper_1.objHp.assignNewObj(styles.opacityBg, this.props.style)} onClick={this.props.onClick}>

            </div>);
    };
    return MaskLayer;
}(base_1.AWebComponent));
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
        zIndex: 1
    }
};
