"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var base_1 = require('../base');
var Centering = (function (_super) {
    __extends(Centering, _super);
    function Centering() {
        _super.apply(this, arguments);
    }
    Centering.prototype.render = function () {
        return React.createElement("table", {style: styles.table}, 
            React.createElement("tr", null, 
                React.createElement("td", {style: styles.td}, this.props.children)
            )
        );
    };
    return Centering;
}(base_1.baseWebComponent));
exports.Centering = Centering;
var styles = {
    table: {
        width: '100%',
        height: '100%',
        borderCollapse: 'collapse'
    },
    td: {
        textAlign: 'center',
        verticalAlign: 'middle'
    }
};
