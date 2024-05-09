'use client'

import Icon from '@mdi/react';
import {
    mdilUndoVariant  
} from '@mdi/light-js';

import style from './style/Action.module.scss'

const REButton = () => {

    return (
        <button className={style.actionbtn} onClick={() => console.log('reply email client')}>
            <Icon className='icon' path={mdilUndoVariant} />
        </button>
    )
}

export default REButton