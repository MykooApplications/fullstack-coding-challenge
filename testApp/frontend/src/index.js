import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginContent from './components/LoginContent';
import DashboardPage from './components/DashboardPage';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// ReactDOM.render(
//     <BrowserRouter>
//         <Router>
//             <Route path="/" element={ <App />}/>
//         </Router>
//     </BrowserRouter>,
//      document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render (
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<LoginContent />}/>
                <Route path="dashboard" element={<DashboardPage />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
