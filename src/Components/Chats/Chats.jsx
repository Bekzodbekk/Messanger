import React, { useState, useEffect } from 'react'
import "./chats.scss"
import DirectItem from "./DirectItems/DirectItem"
import userData from "../../Database/Directs.json"

const Chats = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUserData, setFilteredUserData] = useState([]);

    useEffect(() => {
        // myAccount.id bilan teng bo'lmagan va izlash so'ziga mos kelgan foydalanuvchilarni filterlash
        const filtered = userData.filter(user => {
            if (user.id === props.myAccount.id) return false;
            
            const fullName = user.full_name?.toLowerCase() || '';
            const username = user.username?.toLowerCase() || '';
            const searchTermLower = searchTerm.toLowerCase();
            
            return fullName.includes(searchTermLower) || username.includes(searchTermLower);
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
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats