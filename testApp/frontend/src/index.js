import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginContent from './components/LoginContent';
// import DashboardPage from './components/DashboardPage';

// ReactDOM.render(<Bro><App /></Router>, document.getElementById('root'));


ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={ <App />}/>
            {/* <Route path="/login" element={ <LoginContent />}/> */}
            {/* <Route path="/dashboard" element={ <DashboardPage />}/> */}
        </Routes>
    </Router>,
     document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
