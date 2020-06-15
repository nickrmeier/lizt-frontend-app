import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Newlizt from './components/Newlizt';
import Lizts from './components/Lizts';
import IndivLizt from './components/Indv_lizt_show';

class App extends Component {

  render() {
    return (
      <div>

        <BrowserRouter>
          <Route path='/' exact={true} component={Navbar} />
          <Route path='/' exact={true} component={Lizts} />
          <Route path='/newlizt' exact={true} component={Navbar} />
          <Route path='/newlizt' exact={true} component={Newlizt} />
          <Route path='/indvlizt' exact={true} component={Navbar} />
          <Route path='/indvlizt' exact={true} component={IndivLizt} />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;