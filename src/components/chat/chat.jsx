import { useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
const Chat = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const handleEmoji = e => {
        setText(prev => prev + e.emoji);
        setOpen(false)

    };
    console.log(text);

    return (


        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>jane doe</span>
                        <p>Lorem ipsum, dolor sit amet c</p>
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
                    <div className="text">
                        <img src="https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-house-design-go-for-minimalist.png" alt="" />
                        <p>Lorem ipsum, dolor sit amet cons

                        </p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className="message-own">

                    <div className="text " id="text">
                        <p>Lorem ipsum, dolor sit amet consectetur

                        </p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>Lorem ipsum, dolor sit amet cons

                        </p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className="message-own">
                    <div className="text">
                        <p>Lorem ipsum, dolor sit amet con

                        </p>
                        <span>1 min ago</span>
                    </div>

                </div>
            </div>



            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" id="input"
                    placeholder="type a message..."
                    value={text}
                    onChange={e => setText(e.target.value)} />
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                    <div className="picker"><EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>







    )
}
export default Chat

