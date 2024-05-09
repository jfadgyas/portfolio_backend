import { useEffect, useRef } from "react"

import style from './style/Modal.module.scss'

type Props = {
    canClose: boolean,
    children: React.ReactNode
}

//can close?

const Modal = ({canClose, children}: Props) => {

    const dialogRef = useRef<React.ElementRef<'dialog'>>(null)

    dialogRef.current?.showModal()

    useEffect(() => {
        dialogRef.current?.showModal()
    }, [])

    const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
        e.target === dialogRef.current && dialogRef.current.close()
    }
    
    return (
        <dialog
            className={style.modal}
            ref={dialogRef}
            onClick={closeModal}
            >
            {children}
        </dialog>
    )
}

export default Modal