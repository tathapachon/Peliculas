import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Detalle from "./components/Detalle/Detalle"
import React from 'react';






function App() {
  return ( 
    <BrowserRouter>     
    <div className="App">      
      <Switch>        
       
       
        <Route exact path='/' component={Home}  />
        <Route exact path='/detail/:id' component={Detalle}  />
       
       </Switch>       
    </div>
    </BrowserRouter>
  );
}

export default App;