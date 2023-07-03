import React, { useState } from "react";
import "./loginform.css";
import { DataStore } from "aws-amplify";
import { User } from '../models';

const LoginForm = () => {
  const [popupStyle, setPopupStyle] = useState("hide");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const handleLogin = async () => {
    try {
      // Fetch all users
      const users = await DataStore.query(User);
  
      // Check if the provided username and password match any user
      const matchedUser = users.find(user => user.username === username && user.password === password);
  
      if (matchedUser) {
        // Redirect to homepage
        window.location.href = "/homepage";
      } else {
        showPopup("Invalid username or password");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      showPopup("Login Failed");
    }
  };

  const showPopup = (text) => {
    setPopupStyle("login-popup");
    setText(text);
    setTimeout(() => {
      setPopupStyle("hide");
      setText("");
    }, 3000);
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="login-btn" onClick={handleLogin}>
        Login
      </div>

      <div className={`popup ${popupStyle}`}>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default LoginForm;
