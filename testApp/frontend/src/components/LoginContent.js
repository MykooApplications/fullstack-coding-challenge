
import React from 'react';
import './css/login.css';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

// const loginApiUrl = "http://localhost:8000/login/";

const LoginContent = () => {
    // const navigate = useNavigate()
    const [userValues, setValues] = React.useState({
        username:"",
        password:"",
    });

    const storeUserInput = input => event => {
        setValues({ userValues, [input]: event.target.value });
    }


    const loginHandler = async (userValues) => {
   
        axios.post('http://127.0.0.1:8000/login/', {
            username: userValues.username,
            password: userValues.password
        })
        .then((response) => {
            console.log('login response');
            console.lo(response.data)
        });
    
        // axios.post('',userValues)
        // .then(response => {
        //     console.debug(response.data.token);
        //     console.log(response.data.token);
        //     navigate("dashboard");
        // }).catch(error => {
        //     console.log("sign in error!");
        //     console.debug(error);
        // });
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <h1 className="login-title">Council Member Login</h1>
                <form className="login-form">
                    <input type="text" placeholder="username" className="username" value ={userValues.username} onChange={storeUserInput("username")} />
                    <input type="password" placeholder="password" className="login-textinput" value ={userValues.password} onChange={storeUserInput("password")}/>
                    <button className="login-layout-button" onClick={loginHandler}>Login</button>
                </form>
            </div>
      </div>
    );
};


export default LoginContent;