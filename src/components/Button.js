import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className='px-5 py-2 m-2 bg-gray-400 rounded-lg'>{text}</button>
    </div>
  )
}

export default Button
