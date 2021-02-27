import React from 'react';
import personImage from './img/foto-mia.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>App React</h1>
    <h2>Esta es una aplicación en Reactjs</h2>
    <img src={personImage} alt="mi-image"/>
    </div>
  );
}


export default App;
