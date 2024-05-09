'use server'

import { NextRequest, NextResponse } from 'next/server'

import dbConnect from '@/app/lib/dbConnect'
import Message from '@/app/api/_models/message'

let messages: Array<any> = []

// Get all messages
export async function GET(){
    console.log('mess')

    try{
        await dbConnect()

        messages = await Message.find({
            isDeleted: false // this should change with directories
        })        
        return NextResponse.json(messages)
        //     , {
        //     status: 200,
        //     headers: {
        //       'Access-Control-Allow-Origin': '*',
        //       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        //       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        //     },
        //   })
    }
    catch(err: any){
        return NextResponse.json({msgType: 'error', message: err.message})
    }    
}

// Post new message
export async function POST(req: NextRequest){

    const data = await req.json()

    try{
        await dbConnect()

        const newMessage = new Message(data)
        await newMessage.save()

        return NextResponse.json({
            msgType: 'success',
            message: 'Message sent successfully!',
            msg: newMessage
        })
    }
    catch(err: any){
        return NextResponse.json({msgType: 'error', message: err.message})
    }    
}