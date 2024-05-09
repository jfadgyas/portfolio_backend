'use client'

import { useFormStatus } from "react-dom"

import Icon from '@mdi/react';
import {
    mdilAlert,
    mdilCheck
} from '@mdi/light-js';

import Modal from "./Modal"
import Spinner from "./Spinner"

import style from './style/Sending.module.scss'

const Sending = ({state}: {state: null | {msgType: string, message: string}}) => {

    const {pending} = useFormStatus()
    
    return (
        <>
            {pending &&
                <Modal canClose={false}>
                    <Spinner what='post'/>
                </Modal>
            }
            {state &&
                <Modal canClose={true}>
                    <p className={`${style.modal} ${style[`modal--${state?.msgType}`]}`}>
                        <Icon className='icon' path={state?.msgType === 'error' ? mdilAlert : mdilCheck} size={2}/>
                        {state?.message}
                    </p>
                </Modal>
            }
        </>
    )
}

export default Sending