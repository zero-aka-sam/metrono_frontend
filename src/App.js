import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import Auth from './pages/auth';
import Plans from './pages/plans';
import Search from './pages/search';
import Settings from './pages/settings';
import Wallet from './pages/wallet';
import Products from './pages/products';
import Home from './pages/home';
import NavBar from './components/navbar'
import BottomNavbar from './components/bottomNavbar';

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
    <main>
    <Switch>
    <Redirect from='/' to='/home' exact/>
    <Route path='/auth' component={Auth}/>
    <Route path='/products' component={Products}/>
    <Route path='/home' component={Home}/>
    <Route path='/plans' component={Plans}/>
    <Route path='/wallet' component={Wallet}/>
    <Route path='/search' component={Search}/>
    <Route path='/settings' component={Settings}/>
    </Switch>
    </main>
    <BottomNavbar/>
    </React.Fragment>
    </BrowserRouter>
    
  );
}

export default App;
