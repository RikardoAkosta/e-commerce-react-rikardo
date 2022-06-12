import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../redux/actions/userActions';
import { setLoginMessage } from '../redux/actions/appActions';
import "../styles/login.css";

const Login = () => {
    const { register, handleSubmit } = useForm();
    
    const loginMessage = useSelector(state => state./* app. */loginMessage);

    const navigate = useNavigate();

    const [ error, setError ] = useState("");

    const dispatch = useDispatch();


    const submit = data => {
        dispatch(loginThunk(data))
            .then(() => {
                setError("");
                dispatch(setLoginMessage(""));
                navigate(-1);
            })
            .catch(() => setError("Invalid credentials"));
    }

    return (
        <div className="login-container">
            
            <div className="main-container">
                <form className="login" onSubmit={handleSubmit(submit)}>
                    <strong>Welcome! Enter your email and password to continue</strong>
                    <p className='login-message'>{loginMessage}</p>

                    <div className="test-data">
                        <b>Test data</b>
                        <div className="field">
                            <i className="fa-solid fa-envelope"></i>mason@gmail.com
                        </div>
                        <div className="field">
                            <i className="fa-solid fa-lock"></i>mason1234
                        </div>
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email"
                            { ...register("email") }
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" { ...register("password") } />
                    </div>
                    <div className="error-message">{ error }</div>
                    <button className='submit-button'>
                        Login
                    </button>

                    <div className="switch-forms">
                        Don't have an account? {" "}
                        <button type="button" onClick={() => navigate("/signup")}>
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;