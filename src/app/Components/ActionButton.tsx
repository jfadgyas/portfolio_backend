'use client'

import { updateMessage } from '../_actions/actions';

import Icon from '@mdi/react';
import {
    mdilDelete,
    mdilUndoVariant,
    mdilEmail,
    mdilEmailOpen,
    mdilHeart,
    mdilHeartOff 
} from '@mdi/light-js';

import style from './style/Action.module.scss'

type Props = {
    id: string,
    what:  string,
    value: boolean
}

const icons: Record<string, Record<string, string>> = {
    isDeleted: {
        'true': mdilUndoVariant,
        'false': mdilDelete
    },
    isFlagged: {
        'true': mdilHeartOff,
        'false': mdilHeart
    },
    isRead: {
        'true': mdilEmailOpen,
        'false': mdilEmail
    }
}

const ActionButton = ({id, what, value}: Props) => {

    return (
        <button className={style.actionbtn} onClick={() => updateMessage(id, what, !value)}>
            <Icon className='icon' path={icons[what][value.toString()]} />
        </button>
    )
}

export default ActionButton