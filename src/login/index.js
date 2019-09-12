import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

class Login extends React.PureComponent {
    
    doLogin = (e) => {
        const loginButton = document.getElementById('login__button');
        loginButton.classList.toggle('login__button--clicked');

        this.toggleVisibility('username');
    }

    toggleVisibility = (toToggle) => {
        const toToggleContainer = document.getElementById(`login__${toToggle}-container`);
        toToggleContainer.classList.toggle(`login__${toToggle}-container--visible`);
    }

    usernameDone = () => {
        console.log('clicked');
        this.toggleVisibility('username');
        this.toggleVisibility('password');
    }

    render = () => {
        return (
            <div className="login">
                <div className="login__content">
                    <button
                        className="login__button"
                        id="login__button"
                        onClick={this.doLogin}
                    >
                        login
                    </button>
                    <div
                        className="login__username-container"
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
                        <FontAwesomeIcon className="login__username-next" icon={faChevronRight} />
                    </div>
                    <div
                        className="login__password-container"
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
                            onClick={this.usernameDone}
                            className="login__password-next" icon={faChevronRight}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
