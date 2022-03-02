// Client ID
// 450981544729-21p74q1d1rhfmicv8tnb80d6vgal82a6.apps.googleusercontent.com

import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from "./Header";
import history from "../history";

const App = () => {
    return(
        <div className = "ui container">
            <Router history = {history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path = "/" exact component = {StreamList} />
                        <Route path = "/stream/new" exact component = {StreamCreate} />
                        <Route path = "/stream/edit/:id" exact component = {StreamEdit} />
                        <Route path = "/stream/delete/:id" exact component = {StreamDelete} />
                        <Route path = "/stream/:id" exact component = {StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App