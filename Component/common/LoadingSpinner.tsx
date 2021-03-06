import * as React from 'react';
import { AWebComponent } from '../base';
import { Centering, MaskLayer } from './';
import { objHp } from '../../helper';

type props = {
    show?: boolean,
    imgSrc?: string,
    style?: React.CSSProperties,
};
type state = tCommon.reactState;

export class LoadingSpinner extends AWebComponent<props, state> {
    render() {
        const { show = false, imgSrc, style, children } = this.props;
        const hide = show ? null : styles.hide;
        return <div style={objHp.assignNewObj(styles.div, hide)}>
            <MaskLayer />
            <Centering >
                {children ? children :
                    <img src={imgSrc} style={style} />
                }
            </Centering>
        </div>

    }
}

const styles: {
    div: React.CSSProperties,
    hide: React.CSSProperties
} = {
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