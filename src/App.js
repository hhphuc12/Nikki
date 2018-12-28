import React, { Component } from 'react';
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
