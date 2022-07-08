import './App.css';
// bootstrap import: ---->
// import './bootstrap-5.2.0-beta1-dist/bootstrap-5.2.0-beta1-dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
import Homepage from './pages/HomePage';
import React, {Component} from "react";

import {
    BrowserRouter,
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path={"/"} element={<Homepage/>}></Route>

                </Routes>
            </Router>
        )
    }
}


export default App;
