// components/Main/Main.js
import { useState } from "react";
import Nav from "../navbar/Nav";
import Chats from "../Chats/Chats";
import Direct from "../Direct/Direct";
import { useLocation } from "react-router-dom";

function Main() {
    const [user, setUser] = useState(0);

    const location = useLocation()
    const myAccount = location.state
    function GetHandlerDirectElement(user) {
        setUser(user);
    }

    return (
        <>
            <Nav />
            <Chats myAccount={myAccount} GetHandlerDirectElement={(elm) => GetHandlerDirectElement(elm)} />
            <Direct myAccount={myAccount} user={user} />
        </>
    );
}

export default Main;