import React from 'react';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import Banner from "./components/Banner";



function App(){
  return(

  <div className="app-container">
    <Header />
    <Banner />
    <Footer />
  </div>
  ); 
}
  export default App
