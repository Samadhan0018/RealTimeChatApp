import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfo from "./Userinfo/Userinfo"


const list = () => {
    return(
        <div className='list'>
            <Userinfo/>
            <ChatList/>
           
        </div>
    )
}
export default list