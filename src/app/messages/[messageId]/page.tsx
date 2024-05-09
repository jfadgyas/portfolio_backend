import Link from "next/link";

import { getMessage } from "@/app/_actions/route";
import ActionButton from "@/app/Components/ActionButton"
import REButton from "@/app/Components/REButton";

import Icon from '@mdi/react';
import {
    mdilAccount,
    mdilEmail,
    mdilPhone,
} from '@mdi/light-js';

import style from './page.module.scss'

type Props = {
    params: {messageId: string}
}

const readMessage = async ({params}: Props) => {

    const message = await getMessage(params.messageId)

    return (
        <section
            className={style.message}
            id='message'>
            <div>
                <Link className='link' href='/messages'>Back</Link>
                <REButton />
                <ActionButton id={params.messageId} what='isDeleted' value={message.isDeleted} />
                <ActionButton id={params.messageId} what='isFlagged' value={message.isFlagged} />
                <ActionButton id={params.messageId} what='isRead' value={message.isRead} />
            </div>
            <div className={style.message__detailsWrapper}>
                <h2 className={style.message__detail}>
                    <Icon
                        className='icon'
                        path={mdilAccount} /> {message.name}
                </h2>
                <p className={style.message__detail}>
                    <Icon
                        className='icon'
                        path={mdilEmail} /> {message.email}
                </p>
                <p className={style.message__detail}>
                    <Icon
                        className='icon'
                        path={mdilPhone} /> {message.phone}
                </p>
            </div>
            <h1 className={style.message__subject}>{message.subject}</h1>
            <p className={style.message__date}>{message.createdAt.toLocaleString()}</p>
            <div className={style.message__message}>
                {message.message}
            </div>
        </section>
    )
}

export default readMessage