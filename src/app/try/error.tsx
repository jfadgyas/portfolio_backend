'use client'

import Modal from "../Components/Modal"

export default function Error (){

    console.log('error')

    return <Modal canClose={true} >Something went wrong!</Modal>
}