// Direct.jsx
import React from 'react'
import "./direct.scss"
import Avatar from '../Chats/Avatar/Avatar'
import Message from './Message/Message'
import messagesData from "../../Database/Message.json"

const Direct = (props) => {
    const filteredMessages = messagesData.filter((message) => {
        return (
          (message.sender_id === props.myAccount.id && message.receiver_id === props.user.id) ||
          (message.sender_id === props.user.id && message.receiver_id === props.myAccount.id)
        );
    });

    return (
        <div style={{ display: props.user == 0 ? 'none' : 'flex' }} className='direct__container'>
            <div className="direct__nav">
                <div className="info">
                    <Avatar />
                    <div className="direct_info">
                        <div className="name">
                            <h1>{props.user.full_name}</h1>
                        </div>
                        <div className="status">
                            <p>Last seen 1 minut ago</p>
                        </div>
                    </div>
                </div>
                <div className="direct__mini__btns">
                    <i className="fa-regular fa-bell"></i>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="direct__messages">
                <div className="messages">
                    {filteredMessages.map((elm, idx) => (
                        <Message key={idx} className={elm.sender_id == props.myAccount.id ? "my__message": ""} msg={elm.message}/>
                    ))}
                </div>
                <div className="input__message">
                    <input placeholder='Type something...' type="text" />
                    <i className="fa-solid fa-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default Direct