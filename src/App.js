import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Components
import NavBar from './components/NavBar';
import MenuItems from './components/MenuItems';
import Events from './components/Events';
import Assistance  from './components/Assisstance/Assistance';
// import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <BrowserRouter>

      <div className="App container">

        <NavBar />
        <Switch>
          <Route exact path='/' component={MenuItems} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/assistance' component={Assistance} />
          {/* <Route exact path='/events/:id' component={PageNotFound} /> */}
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;