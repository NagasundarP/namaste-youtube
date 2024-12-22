import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center p-2 '>
        <span className='font-bold mr-2'>{name}</span>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage
