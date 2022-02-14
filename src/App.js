import React from 'react'
import Cards from './components/Cards';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Works from './components/Works';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Works />
      <div className='cards'>
        <Cards title='TENOR TROMBONE' price='600' />
        <Cards title='BASS TROMBONE' price='900' />
        <Cards title='VALVE TROMBONE' price='1200' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
