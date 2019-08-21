import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Credits from './Credits'
import Terms from './Terms'
import Account from './Account'
import Community from './Community'
import Selection from './Selection'
import Creation from './Creation'
import Loading from './Loading'
import Game from './Game'

//import logo from '../logo.svg';
//import '../styles/App.css';

import { AUTH_TOKEN } from '../authorization'
const TOKEN = localStorage.getItem( AUTH_TOKEN )   || 'HackUntilSignupWorks'


class App extends Component {
  //onResize = () => {
  //  const toolbar_height = document.getElementById( 'toolbar' ).offsetHeight
  //  const surround_style = document.getElementById( 'surround' ).style
  //        surround_style.top = toolbar_height + 'px'
  //        surround_style.height = (window.innerHeight - toolbar_height - 1 ) + 'px'
  //}  //  onResize

  //componentDidMount() {
  //  window.addEventListener( 'orientationchange', this.onResize )
  //  window.addEventListener( 'resize', this.onResize )
  //  this.onResize()
  //}  //  componentDidMount

  render() {  //
    return (
      <div id="surround">
        {
          TOKEN && <Switch>
                     <Route exact path='/selection' component={ Selection } />
                     <Route exact path='/creation'  component={ Creation  } />
                     <Route exact path='/loading'   component={ Loading   } />
                     <Route exact path='/game'      component={ Game      } />
                    </Switch>
        }
        <Switch>
          <Route exact path='/home'      component={ Home      } />
          <Route exact path='/login'     component={ Login    } />
          <Route exact path='/signup'    component={ Signup    } />
          <Route exact path='/credits'   component={ Credits   } />
          <Route exact path='/terms'     component={ Terms     } />
          <Route exact path='/account'   component={ Account   } />
          <Route exact path='/community' component={ Community } />
          <Route component={ Home } />
        </Switch>
      </div>
    )  //  return

  }  //  render


}  //  App

export default App;
