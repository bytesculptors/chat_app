import React from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected'

const MessageContainer = () => {
    const noChatSelected = true
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ? <NoChatSelected /> : (
                <>
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>Tran Tuan Nghia</span>
                    </div>
                    <MessageList />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer