import React, { Component } from 'react';
import "../CSS/navbar.css"
import "../JSexternal/main.js"
import vivid from "../images/vivid.png"
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (


            <nav id="haha" className="navbar navbar-expand-lg bg-primary" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="forpad" to=""><img alt="vivid-logo" className="vivid" src={vivid} />Vivid Labs</Link>
                    </div>

                    <div className="topnav-right">
                        <Link to="/login">
                            <button className="btn-primary btn-md nav-btn1"> Login </button>
                        </Link>
                        <Link to="/box_data">
                            <button className="btn-primary btn-md nav-btn2"> Recent Activity </button>
                        </Link >
                    </div>
                </div>
            </nav >
        );
    }
}

export default Navbar;