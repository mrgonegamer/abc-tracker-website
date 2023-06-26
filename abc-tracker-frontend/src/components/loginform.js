import React, { useState } from "react";
import "./loginform.css";

const LoginForm = () => {
    const [popupStyle, setPopupStyle] = useState("hide");

    const [text, setText] = useState("");

    const showPopup = () => {
        setPopupStyle("login-popup");
        setText("Login In Failed");
        setTimeout(() => {
            setPopupStyle("hide")
            setText("")
        }, 3000);
    };

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={showPopup}>
                Login
            </div>

            <p className="register-btn">Or register</p>

            <div className={`popup ${popupStyle}`}>
                <h3>{text}</h3>
            </div>
        </div>
    );
};

export default LoginForm;
