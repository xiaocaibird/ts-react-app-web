"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var base_1 = require("../base");
var Centering = (function (_super) {
    tslib_1.__extends(Centering, _super);
    function Centering() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Centering.prototype.render = function () {
        return <table style={styles.table}>
            <tbody>
                <tr>
                    <td style={styles.td}>
                        {this.props.children}
                    </td>
                </tr>
            </tbody>
        </table>;
    };
    return Centering;
}(base_1.AWebComponent));
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
