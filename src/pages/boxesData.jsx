import React, { Component } from 'react';
import TeamDashboard from './teamDashboard';
import WorkHistory from './workHistory';
import Employee from './employee';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';


class BoxesData extends Component {


    checkIt = () => {
        this.props.history.replace("/registerAsEmploye")
        // console.log(this.props.history);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Sidebar letsCheck={this.checkIt} />
                <Switch>
                    <Route exact path="/box_data" component={TeamDashboard} />
                    <Route path="/box_data/teamdashboard" component={TeamDashboard} />
                    <Route path="/box_data/workHistory" component={WorkHistory} />
                    <Route path="/box_data/employee" component={Employee} />
                </Switch>
            </React.Fragment>);
    }
}

export default BoxesData;
