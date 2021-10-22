import React, { Component } from 'react';
import "../CSS/loginForm_3.css"

class LoginForm_3 extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="login">
                    <div className="container">
                        <div className="frame">
                            <div className="navv">
                                <ul className="links">
                                    <li className="signin-active to-change"><a>Register As Employee</a></li>
                                </ul>
                            </div>
                            <div >
                                <form className="form-signin" action="" method="post" name="form">
                                    <label for="username">Registration Key</label>
                                    <input className="form-styling diff" type="text" name="username" placeholder="" />
                                    <label for="password">Name</label>
                                    <input className="form-styling" type="text" name="password" placeholder="" />
                                    <label for="password">Password</label>
                                    <input className="form-styling" type="text" name="password" placeholder="" />

                                    <div className="btn-animate btn-md"> <a className="btn-register">Register</a> </div>
                                    <div className="btn-animate yr1"> <a className="btn-login">Login</a> </div>

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

export default LoginForm_3;