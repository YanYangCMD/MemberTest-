import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Calendar from "./pages/Calendar";
import UniformParts from "./pages/UniformParts";
import Overview from "./pages/Overview";
import Registration from "./pages/Registration";
import Purchase from "./pages/Purchase";
import MembersProfile from "./pages/MembersProfile";
import HelpMe from "./pages/HelpMe";
import Settings from "./pages/Settings";
import Login from "./pages/Login"

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route path="/Calendar" component={Calendar} />
            <Route path="/Attendance" component={Attendance} />
            <Route path="/UniformParts" component={UniformParts} />
            <Route path="/Overview" component={Overview} />
            <Route path="/Registration" component={Registration} />
            <Route path="/Purchase" component={Purchase} />
            <Route path="/MembersProfile" component={MembersProfile} />
            <Route path="/HelpMe" component={HelpMe} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Login" component={Login} />
        </Switch>
    </BrowserRouter>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
