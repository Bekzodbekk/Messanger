import React from 'react'
import "./avatar.scss"

const Avatar = ({status}) => {
    return (
        <div className="avatar">
            <img src={require("../../../Assets/avatarsImage/avatar_5.jpg")} alt="" />
            {status && <div className='status' style={{ display: "block" }}></div>}
        </div>

    )
}

export default Avatar