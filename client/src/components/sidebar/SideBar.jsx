import React from 'react'
import SearchInput from './SearchInput'
import ConversationList from './ConversationList'
import LogoutButton from './LogoutButton'

const SideBar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <SearchInput />
            <ConversationList />
            <LogoutButton />
        </div>
    )
}

export default SideBar