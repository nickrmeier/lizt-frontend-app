import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Newlizt from './components/Newlizt';
import Lizts from './components/Lizts';
import IndivLizt from './components/Indv_lizt_show';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lizts: [],
    }
  }

  async componentDidMount() {

    const url = `http://localhost:8000/lizts/?format=json`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ lizts: response })
      });

  }

  render(props) {
    return (
      <div>

        <BrowserRouter>
          <Route path='/' exact={true} component={Navbar} />
          <Route path='/' exact={true} render={(props)=> {
            return(
              <Lizts lizts={this.state.lizts} />
            )
          }} />
          <Route path='/newlizt' exact={true} component={Navbar} />
          <Route path='/newlizt' exact={true} component={Newlizt} />
          <Route path='/indvlizt/:title' exact={true} component={Navbar} />
          <Route path='/indvlizt/:title' exact={true} render={(props) => {
            return (<IndivLizt
              match={props.match}
              lizts={this.state.lizts}
            />)
          }} />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;