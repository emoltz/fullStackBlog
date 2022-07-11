// import './App.css';
// bootstrap import: ---->
import './bootstrap-5.2.0-beta1-dist/bootstrap-5.2.0-beta1-dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Homepage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import NavBar from './NavBar';
import React, {Component} from "react";
import NotFoundPage from "./pages/NotFoundPage";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div className={"App"}>
                <NavBar />
                <div className={"container-fluid"}>
                    <Router>
                        <Routes>
                            {/*add pages here --->*/}
                            <Route path={"/"} element={<Homepage/>} exact></Route>
                            <Route path={"/about"} element={<AboutPage/>}></Route>
                            <Route path={"/articles-list"} element={<ArticlesList/>}></Route>
                            <Route path={"/article/:name"} element={<ArticlePage/>}></Route>
                            {/*<Route component={NotFoundPage}></Route>*/}
                        </Routes>
                    </Router>
                </div>

            </div>

        )
    }
}


export default App;
