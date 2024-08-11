import React, { useState, useEffect } from 'react';
import "./chats.scss";
import DirectItem from "./DirectItems/DirectItem";
import axios from 'axios';

const Chats = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUserData, setFilteredUserData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/user/filter?username=${searchTerm}`);
                
                const filtered = response.data.users.filter(user => user.id !== props.myAccount.user.id);
                console.log(response.data.users);
                console.log(props.myAccount.user.id);
                
                
                setFilteredUserData(filtered);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        if (searchTerm.length > 0) {
            fetchUsers();
        } else {
            setFilteredUserData([]);
        }
    }, [searchTerm, props.myAccount.user.id]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='chats__container'>
            <div className="chat__info">
                <h1 className='info_account_name'>
                    👋 Hello
                    <span>
                        {props.myAccount.user.first_name}
                    </span>
                </h1>
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

export default Chats;
