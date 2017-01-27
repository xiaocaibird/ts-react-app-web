import * as React from 'react';
import { AWebComponent } from '../base';
import { Centering, MaskLayer } from './';
import { objHp } from '../../helper';

type props = {
    show: boolean,
    clickMaskLayerToHide?: boolean
};
type state = {
    show?: boolean
};

export class EnlargeElement extends AWebComponent<props, state> {
    constructor(props: props) {
        super();
        this.state = {
            show: props.show
        }
    }
    componentWillReceiveProps(nextProps: props) {
        this.setState(
            {
                show: nextProps.show
            }
        )
    }
    hide() {
        this.setState(
            {
                show: false
            }
        )
    }
    render() {
        const {clickMaskLayerToHide = true} = this.props;
        const {show = false} = this.state;
        const hide = show ? null : styles.hide;
        return <div style={objHp.assignNewObj(styles.div, hide)}>
            <MaskLayer onClick={clickMaskLayerToHide ? this.hide : undefined} />
            <Centering >
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