import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import Hero from './components/Hero';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Hero/>
        <News/>
        <Footer/>
      
      </>
    )
  }
}




