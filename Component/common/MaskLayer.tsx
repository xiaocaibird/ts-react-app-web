import * as React from 'react';
import { AWebComponent } from '../base';
import { objHp } from '../../helper';

type props = {
    style?: React.CSSProperties,
    onClick?: tCommon.anyFun
}
type state = tCommon.reactState;

export class MaskLayer extends AWebComponent<props, state> {
    render() {
        return (
            <div style={objHp.assignNewObj(styles.opacityBg, this.props.style)} onClick={this.props.onClick}>

            </div>
        )
    }
}

const styles: {
    opacityBg: React.CSSProperties
} = {
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