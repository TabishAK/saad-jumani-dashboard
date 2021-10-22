import React, { Component } from 'react';
import "../CSS/footerbox.css";
import circleImg from "../images/circle.png";


class FooterBox extends Component {
    state = {}
    render() {
        return (
            <div className="footer_box">
                <center><img src={circleImg} alt="circle" className="circle-img" /></center>
                <center>{this.props.data}</center>

            </div>
        );
    }
}

export default FooterBox;