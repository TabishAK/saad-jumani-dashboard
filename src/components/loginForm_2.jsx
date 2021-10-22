import React, { Component } from 'react';
import "../CSS/loginForm_2.css"

class LoginForm_2 extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="login">
                    <div className="container">
                        <div className="frame">
                            <div className="navv">
                                <ul className="links">
                                    <li className="signin-active"><a>Register Your Remote Team</a></li>
                                </ul>
                            </div>
                            <div >
                                <form className="form-signin" action="" method="post" name="form">
                                    <label for="username">Team Name</label>
                                    <input className="form-styling diff" type="text" name="username" placeholder="" />
                                    <label for="password">Email</label>
                                    <input className="form-styling" type="text" name="password" placeholder="" />
                                    <label for="password">Password</label>
                                    <input className="form-styling" type="text" name="password" placeholder="" />
                                    <label for="password">Confirm Password</label>
                                    <input className="form-styling" type="text" name="password" placeholder="" />


                                    <div className="btn-animate btn-md"> <a className="btn-register">Register</a> </div>
                                    <div className="btn-animate yr"> <a className="btn-login">Login</a> </div>

                                </form>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div >
                </div>
            </React.Fragment >
        );
    }
}

export default LoginForm_2;