import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import Create from '../screen/Create';

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/create" component={Create} />
                </Switch>
            </BrowserRouter>
        );
    }
}