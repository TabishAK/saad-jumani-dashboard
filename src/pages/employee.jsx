import React from 'react';
import Box from './../components/box';
import "../CSS/employee.css"
import img from "../images/pngwing2.png";

class Employee extends React.Component {
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
                { id: 7, date: "08/May/22" },
                { id: 8, date: "08/May/22" },
                { id: 9, date: "08/May/22" },
                { id: 10, date: "08/May/22" },
                { id: 11, date: "08/May/22" },
                { id: 1, date: "20/August/22" }

            ],
            image: <img src={img} alt="" style={{ width: "165px", height: "195px", marginLeft: "-19px", marginBottom: "-14px" }} />
        }
    }

    _createItemList() {
        let rows = {}
        let counter = 1
        this.state.items.forEach((item, idx) => {
            rows[counter] = rows[counter] ? [...rows[counter]] : []
            if (idx % 6 === 0 && idx !== 0) {
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
            <>
                <div className="upar" >
                    <center> <h3 className="" >Employee Name</h3> </center>
                </div>
                <div className="container-fluid">
                    {Object.keys(rows).map(row => {
                        return (
                            <div className="row items__row" >
                                {rows[row].map(item => {
                                    return (
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ind"
                                            key={item.id}><Box data={item}
                                                Logo={this.state.logo}
                                                image={this.state.image}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                    }
                </div >
            </>
        );
    }
}

export default Employee;