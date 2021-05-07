import React, { Component, useState } from 'react';

import './App.css';
import './scss/style.scss';
import TopContainer from './components/TopContainer';
import Info from './components/Info';
import Portfolio from './components/Portfolio'



class App extends Component{
  constructor(){
  super()
    
    
    }
  
  render() {
  
    return (

  <main>
    <div className="container">
    <TopContainer/>

   <Info/>

   <Portfolio/>
    </div>
  </main>
   )
  }
};
export default App;
