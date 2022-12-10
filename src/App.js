import React from 'react';
import Heroes from './pages/Heroes';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1 className="text-center bg-black text-white leading-loose  text-4xl italic	">
          Bem-vindos ao mundo de Heróis e Vilões
        </h1>
        <Heroes/>
      </div>
    );
  }  
}
export default App;

