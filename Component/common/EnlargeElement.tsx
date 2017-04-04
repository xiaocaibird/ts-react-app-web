import * as React from 'react';
import { AWebComponent } from '../base';
import { Centering, MaskLayer } from './';
import { objHp } from '../../helper';

type props = {
    clickToHide?: boolean
};
type state = {
    show?: boolean
};

export class EnlargeElement extends AWebComponent<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            show: false
        }
    }
    show = () => {
        this.setState(
            {
                show: true
            }
        )
    }
    hide = () => {
        this.setState(
            {
                show: false
            }
        )
    }
    render() {
        const { clickToHide = true } = this.props;
        const { show = false } = this.state;
        const hide = show ? null : styles.hide;
        return <div style={objHp.assignNewObj(styles.div, hide)}>
            <MaskLayer onClick={clickToHide ? this.hide : undefined} />
            <Centering onClick={clickToHide ? this.hide : undefined}>
                {this.props.children}
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