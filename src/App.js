import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import BooksPage from './presentational/BooksPage'
import Dashboard from './container/Dashboard';
import { Navbar } from './presentational/Navbar'
import SingleBook from './presentational/SingleBook';
import Homepage from './container/Homepage';


class App extends Component {
  render() {
    return ( 
      <React.Fragment>
        <Router> 
          <Navbar />
            <Switch> 
              <Route exact path='/' component={Dashboard}/>
              <Route exact path="/books" component={BooksPage} /> 
              <Route exact path="/book/:id" component={SingleBook} />
              <Route exact path= "/homepage" component={Homepage}/>
            </Switch>
          </Router>
        </React.Fragment>
        );
      }
  } 

export default App 
