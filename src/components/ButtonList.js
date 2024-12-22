import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list=["All","Gaming","Movies","Drama","Tech"]

  return (
    <div className='flex'>
        <Button text={"All"} />
        <Button text={"Gaming"} />
        <Button text={"Tech"} />
        <Button text={"Drama"} />
        <Button text={"Movies"} />
        <Button text={"Songs"} />
    </div>
  )
}

export default ButtonList
