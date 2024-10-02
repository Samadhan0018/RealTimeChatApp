import { useState } from "react";
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

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Sign In</button>
        </form>
      </div>   
      <div className="separator"></div>  
      <div className="item">
        <h2>Create an Account</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "#"} alt="Avatar" />
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
