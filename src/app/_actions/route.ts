'use server'

import dbConnect from '@/app/lib/dbConnect'
import Message from '@/app/api/_models/message'
import { revalidatePath } from 'next/cache'

let messages: Array<any> = []

// Get all messages
export const getMessages = async () => {

    try{
        await dbConnect()

        messages = await Message.find({
            isDeleted: false // this should change with directories
        })        
        return messages
    }
    catch(err: any){
        return {msgType: 'error', message: err.message}
    }    
}

// Get one message
export const getMessage = async (messageId: string) => {

    try{
        await dbConnect()

        const message = await Message.findOneAndUpdate({
            _id: messageId
        },
        {
            isRead: true
        },
        {
            new: true
        })
        // Must use this conversation when passing an object, because _id is an object in mongoose
        return JSON.parse(JSON.stringify(message))
    }
    catch(err: any){
        return {msgType: 'error', message: err.message}
    }    
}

// Post new message
export const postMessage = async (state: any, formData: FormData) => {

    try{
        await dbConnect()

        const message = Object.fromEntries(formData)
        const newMessage = new Message(message)
        await newMessage.save()

        return {msgType: 'success', message: 'Message sent successfully!', msg: JSON.stringify(newMessage)}   
    }
    catch(err: any){
        return {msgType: 'error', message: err.message}
    }    
}

export const deleteMessage = async (messageId: string) => {
    // Later same as update, with isDeleted flag, to be able to undo
    try{
        await dbConnect()

        const delMsg = await Message.deleteOne({
            _id: messageId
        })
        revalidatePath('.')
        return {msgType: 'success', message: 'Message deleted successfully!'}
    }
    catch(err: any){
        return {msgType: 'error', message: err.message}
    }
}

// Update message properties
export const updateMessage = async (messageId: string, what: string, value: any) => {

    try{
        await dbConnect()

        const message = await Message.findOneAndUpdate({
            _id: messageId
        }, {
            [what]: value
        })
        
        revalidatePath('.')
        return {msgType: 'success', message: 'Message modified successfully!'}
    }
    catch(err: any){
        return {msgType: 'error', message: err.message}
    }
}