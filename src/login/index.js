import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

class Login extends React.PureComponent {
    state = {
        fade_in: false,
        login_button_fade_in: false,
        username_fade_in: true,
        password_fade_in: true,
        welcome_fade_in: true
    };
    
    doLogin = (e) => {
        this.setState({
            fade_in: true,
            login_button_fade_in: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    fade_in: false,
                    username_fade_in: false
                });
            }, 500);
        });
    }

    toggleVisibility = (toToggle) => {
    }

    usernameDone = () => {
        this.setState({
            username_fade_in: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    password_fade_in: false
                });
            }, 500);
        });
    }

    passwordDone = () => {
        this.setState({
            password_fade_in: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    welcome_fade_in: false
                }, () => {
                    setTimeout(() => {
                        this.setState({welcome_fade_in: true});
                    }, 500);
                });
            }, 500);
        });
    }

    getClassName = (baseClass, isFadeIn) => `${baseClass} ${isFadeIn ? baseClass+'--fade-in' : baseClass+'--fade-out'}`

    getWelcomeClassName = (baseClass, isFadeIn) => `${baseClass} ${isFadeIn ? baseClass+'--fade-in ' + baseClass + '--hidden' : baseClass+'--fade-out'}`

    render = () => {
        return (
            <div className="login">
                <div className={this.getClassName('login__content', this.state.fade_in)}>
                    <button
                        className={this.getClassName('login__button', this.state.login_button_fade_in)}
                        id="login__button"
                        onClick={this.doLogin}
                    >
                        login
                    </button>
                    <div
                        className={this.getClassName('login__username-container', this.state.username_fade_in)}
                        id="login__username-container"
                    >
                        <FontAwesomeIcon className="login__username-icon" icon={faUser} />
                        <div className="login__username-box">
                            <label className="login__username-label">username</label>
                            <input
                                className="login__username-input"
                                type="text"
                            />
                        </div>
                        <FontAwesomeIcon
                            onClick={this.usernameDone}
                            className="login__username-next" icon={faChevronRight}
                        />
                    </div>
                    <div
                        className={this.getClassName('login__password-container', this.state.password_fade_in)}
                        id="login__password-container"
                    >
                        <FontAwesomeIcon className="login__password-icon" icon={faUser} />
                        <div className="login__password-box">
                            <label className="login__password-label">password</label>
                            <input
                                className="login__password-input"
                                type="text"
                            />
                        </div>
                        <FontAwesomeIcon
                            onClick={this.passwordDone}
                            className="login__password-next" icon={faChevronRight}
                        />
                    </div>
                    <div className={this.getClassName('login__welcome', this.state.welcome_fade_in)}>
                        Welcome!
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
