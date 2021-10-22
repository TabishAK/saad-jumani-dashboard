import React, { Component } from 'react';
import boxLogo from "../images/Man.png"
import Box from './../components/box';


class TeamDashboard extends Component {
    constructor() {
        super()
        this.state = {
            items: [
                { id: 1, personName: "Abdullah Kalam" },
                { id: 2, personName: "Ahmed Khan" },
                { id: 3, personName: "Quaid-e-Azam" },
                { id: 4, personName: "Allama Iqbal" },
                { id: 5, personName: "Moulana Tariq Jameel Shb" },
                { id: 6, personName: "Tabish Ali Khan" },
                { id: 7, personName: "Nabeel Ali Khan" }
            ],
            button1: <button className="btn-primary btn-md btn-history"> History </button>,
            button2: <button className="btn-primary btn-md btn-activity"> Recent Activity </button>,
            image: <img src={boxLogo} alt="" style={{ width: "100px", height: "100px" }} />
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

                    <center><h3>Team Dashboard</h3></center>

                    {Object.keys(rows).map(row => {
                        return (
                            <div className="row items__row" key={row}>
                                {rows[row].map(item => {
                                    return (<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ind" key={item.id}> <Box data={item} Logo={this.state.logo} button1={this.state.button1} button2={this.state.button2} image={this.state.image} /></div>)
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

export default TeamDashboard;