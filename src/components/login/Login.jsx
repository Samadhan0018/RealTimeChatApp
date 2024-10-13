import { useState } from "react";
import { toast } from "react-toastify"; // Import toast here
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0], // Corrected this line
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // toast.warn("Login attempt detected!"); // Display a toast message
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Sign In</button>
        </form>
      </div>   
      <div className="separator"></div>  
      <div className="item">
        <h2>Create an Account</h2>
        <form className="form">
          <label htmlFor="file">
            <img src={avatar.url || "#"} alt="Avatar" className="Avatar"/>
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar} // Reused the handleAvatar function
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
