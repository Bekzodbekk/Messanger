import React from 'react'
import "./avatar.scss"

const Avatar = () => {
    
    return (
        <div className="avatar">
            <img src={require("../../../Assets/avatarsImage/avatar_5.jpg")} alt="" />
            <div className='status'></div>
        </div>

    )
}

export default Avatar