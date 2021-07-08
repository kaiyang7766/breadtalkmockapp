import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// cake
import CakeNavbar from './Cake/Navbar';
import Cake_T from './Cake/Traceability';
// beverage
import Beverage from './Beverage/Navbar';
import Beverage_T from './Beverage/Traceability';
// FD
import FdNavbar from './FD/Navbar';
import FD_T from './FD/Traceability';
// Toast
import ToastNavbar from './Toast/Navbar';
import Toast_T from './Toast/Traceability';
// SD
import SdNavbar from './SD/Navbar';
import SD_T from './SD/Traceability';
//A-Mix
import AMNavbar from './AMix/Navbar';
import AM_T from './AMix/Traceability';
//TMC
import TMCNavbar from './TMC/Navbar';
import TMC_T from './TMC/Traceability';
//Hot Kitchen
import HKNavbar from './HK/Navbar';
import HK_T from './HK/Traceability';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
    <img src={require('../assets/breadtalkmascot.png')} id='mascot'></img>
    <h3>BreadTalk CK MOCK Online System 线上系统</h3>
    <p>Please select your department 请选择部门:</p>
    <Navbar/>
    </Route>
    <Route exact path="/cake">
      <CakeNavbar/>
    </Route>
    <Route exact path="/cake/trace">
      <Cake_T/>
    </Route>
    <Route exact path="/beverage">
      <Beverage/>
    </Route>
    <Route exact path="/beverage/trace">
      <Beverage_T/>
    </Route>
    <Route exact path="/fd">
      <FdNavbar/>
    </Route>
    <Route exact path="/fd/trace">
      <FD_T/>
    </Route>
    <Route exact path="/toast">
      <ToastNavbar/>
    </Route>
    <Route exact path="/toast/trace">
      <Toast_T/>
    </Route>
    <Route exact path="/SD">
      <SdNavbar/>
    </Route>
    <Route exact path="/SD/trace">
      <SD_T/>
    </Route>
    <Route exact path="/AM">
      <AMNavbar/>
    </Route>
    <Route exact path="/AM/trace">
      <AM_T/>
    </Route>
    <Route exact path="/TMC">
      <TMCNavbar/>
    </Route>
    <Route exact path="/TMC/trace">
      <TMC_T/>
    </Route>
    <Route exact path="/HK">
      <HKNavbar/>
    </Route>
    <Route exact path="/HK/trace">
      <HK_T/>
    </Route>
    <Route path="/person/:id" children={<Person/>}></Route>
    <Route path="*">
      <Error/>
    </Route>
    </Switch>
    </Router>
    </>
  );
};

export default ReactRouterSetup;
