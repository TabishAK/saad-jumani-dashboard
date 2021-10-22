import React, { Component } from 'react';
import Navbar from './navbar';
import LoginForm_1 from './loginForm_1';

class TeamLogin extends Component {


    render() {

        const loginButtons =
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a className="why" href=""> <span className="glyphicon glyphicon-user"> </span> <strong> REGISTER </strong> </a>
                </li>
                <li><a className="why why1" href=""><span className="glyphicon glyphicon-log-in"></span><strong> LOGIN </strong></a></li>
            </ul>


        return (
            <React.Fragment>
                <Navbar loginButtons={loginButtons} />
                <LoginForm_1 />
            </React.Fragment >
        );
    }
}

export default TeamLogin;