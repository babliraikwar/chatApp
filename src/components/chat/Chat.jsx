import EmojiPicker from "emoji-picker-react"
import "./chat.css"
import { useState } from "react"
const Chat = () =>{
    const [open, setOpen] =useState(false)
    const [text, setText] =useState("")
    const handleEmoji= e=>{
        setText((prev)=>prev+e.emoji);
        setOpen(false)
    };

    return(
    <div className='chat'> 
         <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>babli</span>
                    <p>Lorem ipsum dolor sito, illum?</p>
                </div>
            </div>
            <div className="icons">
            <img src="./phone.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./info.png" alt="" />
            </div>
         </div>
         <div className="center">
         <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                 <p>Lorem ipsum dolor sit ametlorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellendus.</p>
                 <span>1 min ago </span>
                </div>
            </div> 
            <div className="message">
            <img src="./avatar.png" alt="" />
                <div className="texts">
                 <p>Lorem ipsum dolor sit ametlorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellendus.</p>
                 <span>1 min ago </span>
                </div>
            </div>
             <div className="message own ">
                <div className="texts">
                 <p>Lorem ipsum dolor sit ametlorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellendus.</p>
                 <span>1 min ago </span>
                </div>
            </div>
            <div className="message">
            <img src="./avatar.png" alt="" />
                <div className="texts">
                 <p>Lorem ipsum dolor sit ametlorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellendus.</p>
                 <span>1 min ago </span>
                </div>
            </div>
            <div className="message own">
                <div className="texts">
                 <p>Lorem ipsum dolor sit ametlorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellendus.</p>
                 <span>1 min ago </span>
                </div>
            </div>
         </div>
         <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="" />
                <img src="./camera.png" alt="" />
                <img src="./mic.png" alt="" />
            </div>
            <input type="text" placeholder="type a message..." 
            value={text}
            onChange={e=>setText(e.target.value)}
            />
            <div className="emoji">
                <img src="./emoji.png" alt="" 
                onClick={()=>setOpen(prev=>!prev)} />
                <div className="picker">
                <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>
            </div>
            <button className="sendbutton">Send</button>
         </div>  
    </div>
    )
}
export default Chat