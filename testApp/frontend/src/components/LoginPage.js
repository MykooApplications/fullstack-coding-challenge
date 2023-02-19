// eslint-disable-next-line
import React, { Component, useContext, useState} from "react";
// eslint-disable-next-line
import { Link, Redirect, Navigate} from 'react-router-dom';
import LoginContent from './LoginContent'



const LoginPage = () => {

    return (
        <div>
            <LoginContent />
        </div>
    )

//     return {
//         <div className='container mt-5'>
//             <h1>Sign In</h1>
//             <p>Sign into your Account</p>
//             <form onSubmit={(e => onSubmit(e))}>

//             </form>
//         </div>
//     };
};

export default LoginPage;




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