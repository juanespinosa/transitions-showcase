import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Login from './login';

import './App.scss';

class App extends React.PureComponent {
    state = {
        collapsed: false,
        loggedIn: false
    };

    login = () => this.setState({loggedIn: true, collapsed: true});

    renderMainPanel = (props) => {
        if(this.state.loggedIn) return <span>loggedIn</span>
        return (
            <Login
                {...props}
                login={this.login}
            />
        )
    }

    render = () => {
        return ( 
            <div className = "App">
                <div className={`main_panel main_panel--${this.state.collapsed ? 'collapsed' : 'expanded'}`} >
                    <Router>
                        <Route
                            path="/"
                            render={(props) => this.renderMainPanel(props)}
                        />
                    </Router>
                </div>
                <div className={`App__right App__right--${!this.state.collapsed ? 'collapsed' : 'expanded'}`}>
                    <div className={`App__toolbar App__toolbar--${!this.state.collapsed ? 'collapsed' : 'expanded'}`}></div>
                    <div className={`App__container App__container--${!this.state.collapsed ? 'collapsed' : 'expanded'}`}></div>
                </div>
            </div>
        );
    }
}

export default App;
