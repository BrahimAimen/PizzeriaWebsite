import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globaleStyles';
import Hero from './components/Hero';
import Productions from './components/Productions';
import {productsdata, productDataTwo} from './components/Productions/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Productions heading='choose your favorite' data={productsdata} />
      <Feature />
      <Productions heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
