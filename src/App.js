import React, { Component, useState, useEffect } from 'react';
import './App.css';


function App() {
  
  useEffect(() => {
    fetch('https://amgen.prod.arria.com:443/alite_content_generation_webapp/text/k0XDl0BKj33', {
          'method': "GET",
          "mode": "no-cors",
          'headers': {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJibTBrWHBQZVl3U2tfc2hIYVljN1d1ZFoiLCJpYXQiOjE2Mjc5MTY5NzgsImV4cCI6MTc4NTU5Njk3OCwiaXNzIjoiQUxpdGUiLCJzdWIiOiJCSDlyYnBoRW95eXIiLCJBTGl0ZS5wZXJtIjpbInByczp4OmswWERsMEJLajMzIl0sIkFMaXRlLnR0IjoidV9hIn0.2-9Gr7uTmEQqnM30t52kSjO2awDMgym13CpNGCw0M-7rWZCFTnrjINx6pqrsiwd7suW01j3wLmuRP7mvKEDyAQ'
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
