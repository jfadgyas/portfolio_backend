import Link from "next/link"

import { getMessages } from "./_actions/actions"

const AdminPage = async () => {

    const messages = await getMessages().then(data => data as any[])

    const messageCount = messages.filter(item => !item.isRead).length
    
    return (
        <nav>
            <h1>Portfolio admin page</h1>
            <Link className='link' href='messages'>view messages {messageCount}</Link>
            <Link className='link' href='try'>add message</Link>
        </nav>
    )
}

export default AdminPage