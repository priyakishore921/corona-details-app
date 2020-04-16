import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header/index';
import WorldStats from './components/WorldStats/index';
import Footer from './Footer/index';

function App() {
  return (
    <div className="App">   
      <Header />
      <div className="banner">
        <h1>Don't be a covidiot </h1>
        <span>- Steven Magee</span>
        <span className="photo-courtesy"> 
          Photo by Fusion Medical Animation on <a href="https://unsplash.com/s/photos/coronavirus"> Unsplash </a>
        </span >
      </div>
      
      <WorldStats />
      
      <Footer />
    </div>
  );
}

export default App;
