import React, { Component } from 'react';
import "../CSS/sidebarStyle.css"
import $ from "jquery";
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    componentDidMount() {
        $(function () {

            var $sidebar = $("#sidebar"),
                $window = $(window),
                offset = $sidebar.offset(),
                topPadding = 45;

            $window.scroll(function () {
                if ($window.scrollTop() > offset.top) {
                    $sidebar.stop().animate({
                        transition: 0.0001,
                        marginTop: $window.scrollTop() - offset.top + topPadding,

                    });
                } else {
                    $sidebar.stop().animate({
                        marginTop: 0,
                    });
                }
            });
        });
    }


    // handleSave = () => {
    //     console.log(this.props.history)

    // }

    render() {
        // let styleOf = (this.props.haha / 3) * 27;
        //  styleOf = styleOf + "rem"

        return (
            < div className="wrapper d-flex align-items-stretch" >
                <nav id="sidebar" className="order-last img " style={{ height: "85rem" }}>
                    <div className="custom-menu">
                        <button id="sidebarCollapse" className="btn btn-primary" />

                    </div>
                    <div>
                        <h1><Link to="#" className="logo">Team Name <span >Dashboard</span></Link></h1>
                        <ul className="list-unstyled components mb-5">
                            <li className="active">
                                <Link to=""> <span className="fa fa-file-text-o mr-2">   </span> Reports</Link>
                            </li>
                            <li>
                                <Link to="/box_data/teamdashboard"><span className="fa fa-users mr-2"></span>  Manage Team </Link>
                            </li>
                            <li>
                                <Link to="/box_data/employee">  <span className="fa fa-cogs mr-2"></span> Employee </Link>
                            </li>
                            <li>
                                <Link to="/box_data/workHistory">  <span className="fa fa-newspaper-o mr-2"></span> Work History </Link>
                            </li>
                            <li>
                                <Link onClick={this.props.letsCheck}><span className="fa fa-sign-out mr-2"></span>  Signout  </Link>
                            </li>
                        </ul>
                    </div>
                </nav >
            </div >


        );
    }
}

export default Sidebar;
