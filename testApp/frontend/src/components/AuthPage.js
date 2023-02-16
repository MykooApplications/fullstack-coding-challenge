import React, { Component } from "react";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"


export default class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/'> <p>This is the Auth Page</p>  </Route>
                    <Route path='/login' component={LoginPage} />
                    <Route path='/dashboard' component={DashboardPage} />
                </Routes>
            </Router>
          );
    }
}