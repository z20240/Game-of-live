import React, {useState} from 'react';
import { LIFE_STATE } from '../constant';

const cell = (props) => {
    const { width, status } = props;

    return (
        <div style={ {
            // flex: 1,
            width: `calc(${width}%)`,
            height: '0',
            boxSizing: 'border-box',
            paddingBottom: `${width}%`,
            margin: '0.5px',
            backgroundColor: Number(status) % 2 === LIFE_STATE.DEAD ? '#282c34' : '#F00078',
            color: '#fff'

            // border: '1px solid rgba(250, 250, 250)'
        } } >{status}</div>
    );
};

export default cell;