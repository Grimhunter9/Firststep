import React from 'react';
import Head from './Head/Head';
import Quote from './Quote/Quote';
import Video from './Video/Vid';
import Gallery from './Gallery/Gallery';
import Saying from './Saying/Saying';
import Footer from './Footer/Footer';

/*****************************************************/
import './App.css';
import './Head/Head.css';
import './Quote/Quote.css';
import './Video/Vid.css';
import './Gallery/Gallery.css';
import './Saying/Saying.css';
import './Footer/Footer.css';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Head/>
      
     {/* */} <div className="content-area">
        <Quote/>
        <Video/>
        <Gallery/>
        <Saying/>
        <Footer/>
        
      
      </div>
    </div>
  );
  }
}

export default App;
