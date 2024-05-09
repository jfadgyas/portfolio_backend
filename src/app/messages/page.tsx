import Link from "next/link"

import { getMessages } from "../_actions/actions"
import ActionButton from "../Components/ActionButton"

const page = async () => {

    const messages = await getMessages().then(data => data as any[])

    // Must stringify _id, because is a mongoose object of ObjectId
    const messageList = messages.map(item => 
        <li className={item.isRead ? 'listItem' : 'listItem listItem--unread'} key={item._id}>
            <Link className='link' href={`/messages/${item._id}`} >
                <span>{item.createdAt.toLocaleString()}</span>
                <span>{item.name}</span>
                <span>{item.subject}</span>
            </Link>
            <span>
                <ActionButton id={item._id.toString()} what='isDeleted' value={item.isDeleted}/>
                <ActionButton id={item._id.toString()} what='isFlagged' value={item.isFlagged}/>
                <ActionButton id={item._id.toString()} what='isRead' value={item.isRead}/>
            </span>
        </li>
    )

    return (
        <section>
            <h1>kezelo felulet</h1>
            <ul className='list'>
                <li className='listItem'>
                    <div className='link'>
                        <span>Date</span>
                        <span>From</span>
                        <span>Subject</span>
                    </div>
                    <span>Actions</span>
                </li>
                {messageList}
            </ul>
        </section>
    )
}

export default page