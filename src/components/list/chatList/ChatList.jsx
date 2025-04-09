import { useState } from "react"
import "./chatList.css";
import AddUser from "./adduser/AddUser";
const ChatList = () =>{
    const[addMode,setAddMode]= useState(false)
    return(
        <div className="chatList"> 
          <div className="search">
            <div className="searchbar">
                <img src="./search.png" alt="" />
                <input type="text " placeholder="search..." />
            </div>
            <img src={addMode ?"./minus.png":"./plus.png" }alt=""  className="add"
            onClick={()=>setAddMode(prev=>!prev)}
            />
        </div>
        <div className="items">
            <img src="./avatar.png" alt="" />
            <div className="texts">
             <span>babli</span>
             <p>hello</p>
            </div>
        </div>
        <div className="items">
            <img src="./avatar.png" alt="" />
            <div className="texts">
             <span>babli</span>
             <p>hello</p>
            </div>
        </div>
        <div className="items">
            <img src="./avatar.png" alt="" />
            <div className="texts">
             <span>babli</span>
             <p>hello</p>
            </div>
        </div>
        <div className="items">
            <img src="./avatar.png" alt="" />
            <div className="texts">
             <span>babli</span>
             <p>hello</p>
            </div>
        </div>
      <AddUser/>
    </div>
    );
};
export default ChatList