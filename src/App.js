import React from 'react';

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  Whatuitr,
} from './containers';
import { Brand, Cta, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatuitr />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
