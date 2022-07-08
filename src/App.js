import './App.css';
// bootstrap import: ---->
import './bootstrap-5.2.0-beta1-dist/bootstrap-5.2.0-beta1-dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Homepage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';

import React, {Component} from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className={"page-body"}>
                <Router>
                    <Routes>
                        {/*add pages here --->*/}
                        <Route path={"/"} element={<Homepage/>} exact></Route>
                        <Route path={"/about"} element={<AboutPage/>}></Route>
                        <Route path={"/articles-list"} element={<ArticlesList/>}></Route>
                        <Route path={"/article-page"} element={<ArticlePage/>}></Route>
                    </Routes>
                </Router>
            </div>

        )
    }
}


export default App;
