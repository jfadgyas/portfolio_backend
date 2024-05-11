import Link from "next/link"

const messageLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Link className='link' href='/'>HOME</Link>
            {children}
        </div>
    )
}

export default messageLayout