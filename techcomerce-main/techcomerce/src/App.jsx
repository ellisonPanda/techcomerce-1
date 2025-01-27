import React from 'react';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import ProductPage from "./components/ProductPage";



function App(){
  return(

  <div className="app-container">
    <Header />
    <ProductPage />
    <Footer />
  </div>
  );
}
  export default App
