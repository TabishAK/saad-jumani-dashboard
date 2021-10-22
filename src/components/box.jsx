import React, { Component } from 'react';
import "../CSS/box.css";
import "../CSS/workHistory.css"

class Box extends Component {

    render() {
        const { date, personName } = this.props.data;

        return (

            <div className="box">
                <center> {this.props.image}</center>
                <hr />
                <center><h5 className="date"> {date || personName}  </h5></center>
                <center> <b>{this.props.button1}</b></center>
                <center> {this.props.button2}</center>



            </div>

        );
    }
}

export default Box;