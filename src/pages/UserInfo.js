import React from 'react';
/* import { userAvatar } from "assets/images" */
import "../styles/login.css";
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userName", "");
        navigate("/login");
    }

    return (
        <div className="login-container">
            <div className="main-container">
                <div className="login user-info">
                   {/*  <img src={userAvatar} alt="" className="user-avatar" /> */}
                    <b>{localStorage.getItem("userName")}</b>
                    <button onClick={logout}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;