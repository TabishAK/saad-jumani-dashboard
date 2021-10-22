import React, { Component } from 'react';
import Navbar from '../components/navbar';
import LoginForm_2 from '../components/loginForm_2';

class RemoteTeamRegister extends Component {
    render() {
        return (

            <React.Fragment>
                <Navbar />
                <LoginForm_2 />
            </React.Fragment>
        );
    }
}

export default RemoteTeamRegister;