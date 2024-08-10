import React from 'react'
import "./directItem.scss"
import Avatar from '../Avatar/Avatar'

const DirectItem = (props) => {
    console.log(props.lastMessage);
    
    return (
        <>
            <div onClick={() => props.GetHandlerDirectElement(props.element)} key={props.element} className="direct__item">
                <div className="account_info_container">
                    <Avatar />
                    <div className="direct__item__info">
                        <h1 className='full__name'>{props.element.full_name}</h1>
                        <p className="message">
                            {props.lastMessage}
                        </p>
                    </div>

                </div>
                <div className="direct__message__info">
                    <p className='message__time'>{ }</p>
                </div>
            </div>
        </>
    )
}

export default DirectItem