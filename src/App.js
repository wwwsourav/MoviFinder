import React from 'react';
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Headder from './Screen/Headder';
import Home from './Screen/Home';
import LatestMovies from './Screen/LatestMovies';
import PopularMovies from './Screen/PopularMovies';
import Footer from './Screen/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Headder/>
      <div class="container">
        <switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/LatestMovies' component={LatestMovies}></Route>
          <Route path='/PopularMovies' component={PopularMovies}></Route>
        </switch>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
