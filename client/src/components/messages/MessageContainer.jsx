import React, { useEffect } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected'
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? <NoChatSelected /> : (
                <>
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
                    </div>
                    <MessageList />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer