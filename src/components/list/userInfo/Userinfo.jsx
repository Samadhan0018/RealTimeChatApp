import "./Userinfo.css"


const Userinfo= () => {
    return(
        <div className='userInfo'>
            <div className="user">
                <img src="./avatar.png"alt=""></img>
            </div>
            <div className="icons">
             <img src="./more.png" alt=""></img>
            <img src="./video.png" alt=""></img>
            <img src="./edit.png" alt=""></img>

          </div>     
        </div>
    )
}
export default Userinfo