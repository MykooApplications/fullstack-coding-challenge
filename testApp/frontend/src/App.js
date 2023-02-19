import React from 'react';
import { Routes, Route} from 'react-router-dom';
// import logo from './logo.svg';
// import logo from './city.png';
import './App.css';
// import LoginPage from "./components/LoginPage";
import LoginContent from './components/LoginContent';
import DashboardPage from './components/DashboardPage';


const App = () => {
  return(
    <div>
      <Routes>
        <Route path='' element={<LoginContent/>}/>
        <Route path='login' element={<LoginContent/>}/>
        <Route path='dashboard' element={<DashboardPage/>}/>
      </Routes>
    </div>
  );
};

export default App;


// /* <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div> */