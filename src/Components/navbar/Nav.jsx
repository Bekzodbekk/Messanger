import React, { useState } from 'react';
import "./nav.scss";
import Avatar from '../Chats/Avatar/Avatar';

const Nav = () => {
    const [activeMenu, setActiveMenu] = useState("message");
    const [mode, setMode] = useState("dark");

    const handleMenuClick = (menuName) => {
        setActiveMenu(menuName);
    }
    const handleModeClick = (modeName) => {
        setMode(modeName);
    }

    return (
        <div className='nav__container'>
            <div className="menu__container">
                <div className="logo">
                    <Avatar />
                    {/* <img src={require("../../Assets/logo.png")} alt="Logo" /> */}
                </div>
                <span></span>
                <div className="menus">
                    <div className="home__menu" onClick={() => handleMenuClick("home")}>
                        <i className={`fa-solid fa-house ${activeMenu === "home" ? "active" : ""}`}></i>
                    </div>
                    <div className="message__menu" onClick={() => handleMenuClick("message")}>
                        <i className={`fa-regular fa-message ${activeMenu === "message" ? "active" : ""}`}></i>
                    </div>
                    <div className="phone__menu" onClick={() => handleMenuClick("phone")}>
                        <i className={`fa-solid fa-phone ${activeMenu === "phone" ? "active" : ""}`}></i>
                    </div>
                    <div className="user__menu" onClick={() => handleMenuClick("user")}>
                        <i className={`fa-regular fa-user ${activeMenu === "user" ? "active" : ""}`}></i>
                    </div>
                </div>
                <span></span>
                <div className="me__menus">
                    <div className="saved__message__menu">
                        <i className="fa-solid fa-bookmark"></i>
                    </div>
                    <div className="settings__menu">
                        <i className="fa-solid fa-gear"></i>
                    </div>
                </div>
            </div>
            <div className="mode__interface">
                <div className="dark__mode">
                    <i 
                        style={{"color": mode === "dark" ? "#7660fd" : "#4a4c52"}} 
                        className={`fa-solid fa-moon ${mode === "dark" ? "active" : ""}`}
                        onClick={() => handleModeClick("dark")}
                    ></i>
                </div>
                <div className="light__mode">
                    <i 
                        style={{"color": mode === "light" ? "#7660fd" : "#4a4c52"}} 
                        className={`fa-solid fa-sun ${mode === "light" ? "active" : ""}`}
                        onClick={() => handleModeClick("light")}
                    ></i>
                </div>
            </div>
        </div>
    );
}

export default Nav;
