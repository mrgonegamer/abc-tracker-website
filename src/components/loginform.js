import React, { useState } from "react";
import "./loginform.css";
import axios from "axios";

const LoginForm = () => {
  const [popupStyle, setPopupStyle] = useState("hide");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState(""); // Add the 'text' state

  const handleLogin = async () => {
    // Send a POST request to the backend API for login
    try {
      const response = await axios.post("http://localhost:5000/login", { username, password });
  
      if (response.status === 200) {
        // Login successful
        const data = response.data;
        
        if (data.message === "Login successful") {
          // Redirect to homepage
          window.location.href = "/homepage";
        } else {
          // Login failed, show error message
          showPopup("Invalid username or password");
        }
      } else {
        // Login failed, show error message
        showPopup("Login Failed");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      showPopup("Login Failed");
    }
  };

  const handleRegister = async () => {
    // Send a POST request to the backend API for registration
    try {
      const response = await axios.post("http://localhost:5000/register", { username, password });

      if (response.status === 200) {
        // Registration successful, show success message
        showPopup("Account Created");
      } else {
        // Registration failed, show error message
        showPopup("Registration Failed");
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
      showPopup("Registration Failed");
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

      <p className="register-btn" onClick={handleRegister}>
        Or register
      </p>

      <div className={`popup ${popupStyle}`}>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default LoginForm;
