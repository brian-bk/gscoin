import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Header from './Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Transactions from './pages/Transactions';
import Wallets from './pages/Wallets';


const App = () => (
  <Router>
    <div id="App">
      <Route path="*" render={childProps => (
        <Header pageUrl={childProps.location.pathname} />
      )} />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wallets" component={Wallets} />
          <Route path="/transactions" component={Transactions} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />;
        </Switch>
      </div>
    </div>
  </Router>
);

export default  App;
