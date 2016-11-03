import * as React from 'react';
import { baseWebComponent } from '../base';

type props = tCommon.reactProps;
type state = tCommon.reactState;

export class Centering extends baseWebComponent<props, state> {
    render() {
        return <table style={styles.table}>
            <tr>
                <td style={styles.td}>
                    {this.props.children}
                </td>
            </tr>
        </table>

    }
}

const styles: {
    table: React.CSSProperties,
    td: React.CSSProperties
} = {
        table: {
            width: '100%',
            height: '100%',
            borderCollapse: 'collapse'
        },
        td: {
            textAlign: 'center',
            verticalAlign: 'middle'
        }
    }