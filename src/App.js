import React, { Component, useState, useEffect } from 'react';
import './App.css';
import { myConfig } from './config.js'



function App() {
  const apiKey = myConfig.SECRET_API_KEY;
  
  useEffect(() => {
    fetch('https://amgen.prod.arria.com:443/alite_content_generation_webapp/text/k0XDl0BKj33', {
          'method': "GET",
          "mode": "no-cors",
          'headers': {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': 'Bearer apiKey'
          }
    })
    .then(response => response.json())
    .then(data => console.log('DATA:', data))
    .catch(error => console.log('ERROR:', error))

  },[])

  
    return (
      <div>TEST</div>
    )
  
}

export default App;
