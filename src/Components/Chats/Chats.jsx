import React, { useState, useEffect } from 'react';
import "./chats.scss";
import DirectItem from "./DirectItems/DirectItem";
import userData from "../../Database/Directs.json";
import messageData from "../../Database/Message.json";

const Chats = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUserData, setFilteredUserData] = useState([]);

    useEffect(() => {
        const filtered = userData.filter(user => {
            if (user.id === props.myAccount.id) return false;

            const fullName = user.full_name?.toLowerCase() || '';
            const username = user.username?.toLowerCase() || '';
            const searchTermLower = searchTerm.toLowerCase();

            return fullName.includes(searchTermLower) || username.includes(searchTermLower);
        }).map(user => {
            const userMessages = messageData.filter(msg => 
                (msg.sender_id === user.id && msg.receiver_id === props.myAccount.id) ||
                (msg.receiver_id === user.id && msg.sender_id === props.myAccount.id)
            );

            const lastMessage = userMessages.length > 0 
                ? userMessages.reduce((prev, current) => (new Date(current.timestamp) > new Date(prev.timestamp)) ? current : prev)
                : null;

            // 24 soatlik formatda soat va daqiqalarni olish uchun options
            const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
            const lastMessageTime = lastMessage 
                ? new Date(lastMessage.timestamp).toLocaleTimeString([], timeOptions)
                : "";

            return {
                ...user,
                lastMessage: lastMessage ? lastMessage.message : "No messages yet",
                lastMessageTime: lastMessageTime,
            };
        });

        setFilteredUserData(filtered);
    }, [searchTerm, props.myAccount.id]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='chats__container'>
            <div className="chat__info">
                <h3 className='category'>
                    All Chats
                    <span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                </h3>
                <h1>Messages <span>({filteredUserData.length})</span></h1>
            </div>
            <div className="search__container">
                <input 
                    className='search__chat' 
                    type="text" 
                    placeholder='Search' 
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="chats">
                <div className="all__chats chat__bas">
                    <div className="title_chat">
                        <p>All Messages</p>
                    </div>
                    <div className="direct__items">
                        {filteredUserData.map(elm => (
                            <DirectItem 
                                key={elm.id} 
                                GetHandlerDirectElement={props.GetHandlerDirectElement} 
                                element={elm} 
                                lastMessage={elm.lastMessage}
                                lastMessageTime={elm.lastMessageTime}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats;
