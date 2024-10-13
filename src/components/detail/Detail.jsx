import "./detail.css"
const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" className="icon" />
                <h3>Jane Doe</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" className="icon" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" className="icon" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>privacy and help</span>
                        <img src="./arrowUp.png" alt="" className="icon" />
                    </div>
                </div>


                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" className="icon" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://w0.peakpx.com/wallpaper/957/693/HD-wallpaper-anime-girls-dark-hair-anime-dark-eyes-long-hair-pixiv.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div> 
                            <img src="./download.png" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://w0.peakpx.com/wallpaper/957/693/HD-wallpaper-anime-girls-dark-hair-anime-dark-eyes-long-hair-pixiv.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div> 
                            <img src="./download.png" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://w0.peakpx.com/wallpaper/957/693/HD-wallpaper-anime-girls-dark-hair-anime-dark-eyes-long-hair-pixiv.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div> 
                            <img src="./download.png" alt="" />
                        </div>
                      
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>shared files</span>
                        <img src="./arrowDown.png" alt="" className="icon" />
                    </div>
                </div>
                <div>
                    <button>Block user</button>
                </div>
                <div>
                    <button> Delete user</button>
                </div>



            </div>
           
        </div>
        
    )
}

export default Detail;