import { useState } from "react";
import Chats from "../Chats/Chats";
import Direct from "../Direct/Direct";
import Nav from "../navbar/Nav";
import "./app.scss"
import directData from "../../Database/Directs.json"

function App() {
  const [user, setUser] = useState(0)
  function GetHandlerDirectElement(user){
    setUser(user)
  }
  
  const myAccount = directData[1]

  return (
    <div className="container">
      <Nav />
      <Chats myAccount={myAccount} GetHandlerDirectElement={(elm) => GetHandlerDirectElement(elm)}/>
      <Direct myAccount={myAccount} user={user}/>
    </div>
  );
}

export default App;
