import React from 'react'
import "./message.scss"

const Message = ({msg, className}) => {
  return (
    <h1 className={`${className} from__message`}>{msg}</h1>
  )
}

export default Message