import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import AuthPage from "./components/AuthPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div>
      <AuthPage />
    </div>
    );
  }
}
const appDiv = document.getElementById("app");
render(<App name="testApp" />, appDiv);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;



