'use client'

import { useFormState } from "react-dom" 

import Icon from '@mdi/react';
import {
    mdilAccount,
    mdilEmail,
    mdilPhone,
    mdilTag,
    mdilMessageText,
    mdilArrowRightCircle 
} from '@mdi/light-js';

import { postMessage } from "../_actions/actions";
import Sending from "../Components/Sending"

import style from './page.module.scss'

const NewPostPage = () => {

    const sendForm = async (state: any, formData: FormData) => {
        //validate
        return await postMessage(state, formData)
    }

    const [state, formAction] = useFormState(sendForm, null)
    
    return (
        // <form action={formAction}>
        <form
            className={style.form}
            action={formAction}>
            <label className={style.label}>
                <Icon
                    className='icon'
                    path={mdilAccount} 
                />
                <input className={style.input} name='name' />
            </label>
            <label className={style.label}>
                <Icon
                    className='icon'
                    path={mdilEmail}
                />
                <input className={style.input} name='email' />
            </label>
            <label className={style.label}>
                <Icon
                    className='icon'
                    path={mdilPhone}
                />
                <input className={style.input} name='phone' />
            </label>
            <label className={style.label}>
                <Icon
                    className='icon'
                    path={mdilTag}
                />
                <input className={style.input} name='subject' placeholder='comes from the form type' />
            </label>
            <label className={style.label}>
                <Icon
                    className='icon'
                    path={mdilMessageText}
                />
                <input className={style.input} name='message' />
            </label>
            <button className={style.button} type='submit'>
                <Icon
                    className='icon'
                    path={mdilArrowRightCircle}
                />
            </button>
            <Sending state={state}/>
        </form>
    )
}

export default NewPostPage