import React from 'react';
import './App.css';
import Connect from './components/Connect/Connect';
import Event from './components/Event/Event';
import Gallery1 from './components/Gallery1/Gallery1';
import Gallery2 from './components/Gallery2/Gallery2';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Video from './components/Video/Video';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Gallery1/>
      <Video/>
      <Gallery2/>
      <Event/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
