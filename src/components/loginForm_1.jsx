import React, { Component } from 'react';
import "../CSS/loginForm_1.css"

class LoginForm_1 extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="login">
                    <div className="container">
                        <div className="frame">
                            <div className="navv">
                                <ul className="links">
                                    <li className="signin-active haha"><a>Team Login</a></li>
                                </ul>
                            </div>
                            <div >
                                <form className="form-signin" action="" method="post" name="form"> <label for="username">Email</label>
                                    <input className="form-styling" type="text" name="username" placeholder="" />
                                    <label for="password">Password</label>
                                    <input className="form-styling" type="text" name="password" placeholder="" />
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox"> <span className="ui"></span>Keep me signed in</label>
                                    <div className="btn-animate"> <a className="btn-signin">Sign in</a> </div>
                                    <div className="btn-animate manja"> <a className="btn-signin">Sign Up</a> </div>

                                </form>
                            </div>
                            <div className="forgot"> <a href="#">Forgot your password?</a> </div>
                            <div>
                            </div>
                        </div>
                    </div >
                </div>
            </React.Fragment >
        );
    }
}

export default LoginForm_1;