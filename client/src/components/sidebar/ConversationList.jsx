import React from 'react'
import Conversation from './Conversation'
import useGetCoversations from '../../hook/useGetCoversations'
import { getRandomEmoji } from '../../utils/emojis'

const ConversationList = () => {
    const { loading, conversations } = useGetCoversations()
    console.log(conversations);

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}
            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    )
}

export default ConversationList