import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/loginform';
import NewVehicle from './components/newvehicle';
import ViewVehicles from './components/view-vehicles';
import HomePage from './components/homepage';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/new-vehicle" component={NewVehicle} />
          <Route path="/view-vehicles" component={ViewVehicles} /> {/* Make sure the path matches here */}
          <Route path="/homepage" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
