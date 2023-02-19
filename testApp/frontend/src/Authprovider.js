import React, { createContext, useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';

//from
//https://kentcdodds.com/blog/authentication-in-react-applications

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(() =>
        localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null
    ); 
    
    const [loading, setLoading] = useState(true);

    const login = async (username, password, callback) => {
        try {

            const response = await fetch('http://127.0.0.1:8000/login/', {
                methos: "POST",
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password }),
            });

            const data = await Response.json();
            if (response.status === 200) {
                setAuthToken(data.authToken);
                localStorage.setItem('authToken', JSON.stringify(data.authToken));
            }
            callback(response.status);
        } catch (error) {
            console.log(error)
        }
    };

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('authToken');
        redirect('/');
    };

    const contextData = {
        authToken, setAuthToken, login,
        logout
    };

    useEffect(() => {
        setLoading(false);

    }, [authToken, loading]);

    return (
        // <AuthContext.Provider value={contextData} />
        <AuthContext.AuthProvider value={contextData}/>
    );
};

// export default AuthProvider;