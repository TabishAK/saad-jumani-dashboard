import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageFront from './pages/pageFront';
import { Switch, Route } from 'react-router-dom';
import TeamLogin from './components/teamLogin';
import BoxesData from './pages/boxesData';
import RegisterAsEmployee from './pages/registerAsEmployee';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={PageFront} />
        <Route path="/login" component={TeamLogin} />
        <Route path="/box_data" component={BoxesData} />
        <Route path="/registerAsEmploye" component={RegisterAsEmployee} />
      </Switch>
    </>
  );
}

export default App;
