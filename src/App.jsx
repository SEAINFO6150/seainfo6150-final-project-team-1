import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import allBrands from './Home/AllBrands';
import Homepage from './Home/Homepage.jsx';
import AddVehicle from './Home/AddVehicle.jsx';
import Analyse from './Home/Detail';
import contactus from './Home/contactus.jsx';
import about from './Home/about';
import Error from './Home/Error';
import IndividualPage from './Home/VehiclePage';
import styles from './App.module.css';


function App() {
  return (
    <Router>
      <header>
          <h1>Vehicle Fan Club</h1>
          <ul className={styles.nav}>
            <li>
              <Link className={styles.link_white} to="/">Home</Link>
            </li>
            <li>
              <Link className={styles.link_white} to="/AllBrands">All Brands</Link>
            </li>
            <li>
              <Link className={styles.link_white} to="/AddVehicle">Add Vehicle</Link>
            </li>
            <li>
              <Link className={styles.link_white} to="/Contact">Contact</Link>
            </li>
            <li>
              <Link className={styles.link_white}to="/About">About</Link>
            </li>
          </ul>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/AllBrands" exact component={allBrands} />
        <Route path ="/AddVehicle" exact component = {AddVehicle}/>
        <Route path="/Contact" component={contactus} />
        <Route path="/About" component={about} />
        <Route
          path="/AllBrands/:individual"
          exact
          render={({ match }) => (
            <IndividualPage
              individual={match.params.individual}
            />
          )}
        />
        <Route
          path="/AllBrands/:individual/:info"
          exact
          render={({ match }) => (
            <Analyse
              individual={match.params.individual}
              info={match.params.info}
            />
          )}
        />

        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;


