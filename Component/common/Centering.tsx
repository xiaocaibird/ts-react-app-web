import * as React from 'react';
import { AWebComponent } from '../base';

type props = tCommon.reactProps;
type state = tCommon.reactState;

export class Centering extends AWebComponent<props, state> {
    render() {
        return <table style={styles.table}>
            <tbody>
                <tr>
                    <td style={styles.td}>
                        {this.props.children}
                    </td>
                </tr>
            </tbody>
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