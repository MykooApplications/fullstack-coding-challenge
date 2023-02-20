
import React, { useState } from 'react';
import './css/login.css';
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
// import DashboardPage from './DashboardPage';

//[{"name":"Inez Barron","district":"42",
//"borough":"Brooklyn","political_party":"Democrat"}

const LoginContent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("isAuthenticated") || false));
    const navigate = useNavigate();

    // eslint-disable-next-line
    const goDashboard= async (e) => {
        return (
            navigate("./dashboard")
            // <Route path="/dashboard" component={<DashboardPage/>}/>
            // <Navigate replace to="/dashboard"/>
        );
    }


    const loginHandler = async (e) => {
        e.preventDefault();
        
        console.log(username);
        console.log(password);

        const userAuth = localStorage.getItem("isAuthenticated");

        setAuthenticated(userAuth);
        console.log(authenticated);
   
        axios.post('http://127.0.0.1:8000/login/', {
            username: username,
            password: password,
        })
        .then((response) => {
            const splitDistrict = password.split("-");
            const districtNumber = splitDistrict[1];
            setAuthenticated(true)
            localStorage.setItem("userDistrict", districtNumber);
            localStorage.setItem("userToken", response.data.token);
            localStorage.setItem("isAuthenticated", true);
            console.log("GO TO DASHBAORD");

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token[0]}`

            return (
                navigate("dashboard")
                
                // <Route path="/dashboard" component={<DashboardPage/>}/>
                // <Navigate replace to="/dashboard"/>
            );
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