import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar appName='Github Finder'></Navbar>
              <div className="container">
                <Alert/>
                <Switch>
                  <Route exact path='/'
                    render={props=>(
                    <Fragment>
                      <Search/>
                      <Users/>
                    </Fragment>
                  )}></Route>
                  <Route exact path='/About' component={About}>
                  </Route>
                  <Route exact path='/user/:login' component={User}>
                  </Route>
                </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    
    </GithubState>

  );
}

export default App;
