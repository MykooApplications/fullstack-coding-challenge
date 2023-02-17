import React, { Component, useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import DashboardPage from "./DashboardPage";

// const Login = () => {
//     const [formData, setFormData] = useState ({
//         username:'',
//         password:''
//     });

//     const { username, password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

//     const onSubmit = e => {
//         e.preventDefault();

//         //login function, username & password
//     };

//     //is user auth, if yes redirect to dashboard home

//     return {
//         <div className='container mt-5'>
//             <h1>Sign In</h1>
//             <p>Sign into your Account</p>
//             <form onSubmit={(e => onSubmit(e))}>

//             </form>
//         </div>
//     };
// };

// export default Login;




// const Login = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: ''
//     });

//     const { email, password } = formData;

//     const onChange = e => {
//         e.preventDefault();
//     };

//     return (
//         <div className='loginContainer'>
//             <h1>Login</h1>
//             <form>
//                 <label for="username">Username:</label>
//                 <input type="text" id="username" name="username"></input>
//                 <label for="password">Password:</label>
//                 <input type="password" id="password" name="password"></input>

//                 <input type="submit" value="login"></input>
//             </form>
//         </div>
//     );
// };

// export default class LoginPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }
    
//     render() {
//         return (<div>
//             <h1>Login</h1>
//             <form>
//                 <label for="username">Username:</label>
//                 <input type="text" id="username" name="username"></input>
//                 <label for="password">Password:</label>
//                 <input type="password" id="password" name="password"></input>

//                 <input type="submit" value="login"></input>
//             </form>
//             <DashboardPage />
//           </div>
//           );
//     }
// }