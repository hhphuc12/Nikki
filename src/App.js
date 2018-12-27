import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './screen/Home';
import Detail from './screen/Detail';
import AppRouter from './router/AppRouter';

class App extends Component {
    render() {
        return (
            <div className="app">
                <AppRouter />
            </div>
        );
    }
}

export default App;
