import React, { Component } from 'react';
import boxLogo from "../images/folder.png"
import Box from './../components/box';
import "../CSS/workHistory.css"



class WorkHistory extends Component {
    constructor() {
        super()
        this.state = {
            items: [
                { id: 1, date: "13/April/20" },
                { id: 2, date: "17/march/19" },
                { id: 3, date: "12/june/22" },
                { id: 4, date: "01/12/22" },
                { id: 5, date: "16/12/22" },
                { id: 6, date: "08/May/22" },
                { id: 7, date: "20/August/22" }
            ],
            button1: <button className="btn-primary btn-block btn-md view"> View </button>,
            image: <img src={boxLogo} style={{ width: "150px", height: "150px", marginBottom: "-13px" }} alt="" />
        }
        this._createItemList.bind(this)
    }

    _createItemList() {
        let rows = {}
        let counter = 1
        this.state.items.forEach((item, idx) => {
            rows[counter] = rows[counter] ? [...rows[counter]] : []
            if (idx % 3 === 0 && idx !== 0) {
                counter++
                rows[counter] = rows[counter] ? [...rows[counter]] : []
                rows[counter].push(item)
            } else {
                rows[counter].push(item)
            }
        })
        return rows;
    }

    render() {

        let rows = this._createItemList()
        return (
            < React.Fragment >
                <div className="container-fluid">

                    <center><h3>Work History</h3></center>

                    {Object.keys(rows).map(row => {
                        return (
                            <div className="row items__row" key={row}>
                                {rows[row].map(item => {
                                    return (<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ind " key={item.id}><Box data={item} Logo={this.state.logo} button1={this.state.button1} image={this.state.image} /></div>)
                                })}
                            </div>
                        )
                    })
                    }
                </div >

            </React.Fragment >

        );
    }
}

export default WorkHistory;