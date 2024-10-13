import "./addUser.css";
const AddUser = () => {
    return (
        <div className="addUser">
            <form className="form">
                <input className="input" type="text" placeholder="Username" name="username"></input>
                <button>Search</button>
            </form>
            <div className="user">
                <div className="details" >
                    <img src="./avatar.png" alt=""></img>
                    <span>Jane Doe</span> 
                    <button>Add User</button>
                </div>
               
            </div>
        </div>
    );
};
export default AddUser;