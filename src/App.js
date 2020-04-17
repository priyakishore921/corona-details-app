import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/index';
import Footer from './Footer/index';
import Home from 'components/Home/index';
import CountryWise from 'components/CountryWise/index';

function App() {
  return (
    <div className="App">   
      <Header />
      <Switch>
        <Route path='/CountryWise' component={CountryWise} />
        <Route path='/' component={Home}/>
      </Switch>      
      <Footer />
    </div>
  );
}

export default App;
