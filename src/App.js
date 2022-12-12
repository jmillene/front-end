import React from 'react';
import Login from './pages/Login';
import Account from './pages/Account';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <>
      <h1 className="text-center bg-black text-white leading-loose  text-4xl italic	">
        Bem-vindos ao mundo de Heróis e Vilões
      </h1><BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login }  />
            <Route exact path="/account" component={ Account} />
          </Switch>
        </BrowserRouter>
        </>
    );
  }  
}
export default App;

