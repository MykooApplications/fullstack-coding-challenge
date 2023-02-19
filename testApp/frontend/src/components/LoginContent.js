
import React, { useState } from 'react';
import './css/login.css';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

//[{"name":"Inez Barron","district":"42",
//"borough":"Brooklyn","political_party":"Democrat"}

// const loginApiUrl = "http://localhost:8000/login/";

const LoginContent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("isAuthenticated") || false));


    const loginHandler = async (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);

        if (authenticated) {
            console.log();
        }
   
        axios.post('http://127.0.0.1:8000/login/', {
            username: username,
            password: password,
        })
        .then((response) => {
            console.log('login response');
            console.log(response.data);
            setAuthenticated(true)
            localStorage.setItem("isAuthenticated", true);
        })
        .catch((error) => 
        console.log(error)
        );
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <h1 className="login-title">Council Member Login</h1>
                <form className="login-form">
                    <input type="text" placeholder="username" className="username" value ={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="password" className="login-textinput" value ={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="login-layout-button" onClick={loginHandler}>Login</button>
                </form>
            </div>
      </div>
    );
};


export default LoginContent;