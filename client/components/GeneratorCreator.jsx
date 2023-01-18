import React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {useInput} from '../hooks.js'




function GeneratorCreator(props) {
  
  const [text, textOnChange, resetText] = useInput('');
  const fetchLink = () => {
    console.log(text);
    console.log('im in generatorcreator and i found entires', props.entries);
    fetch('/genlink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ links: props.entries}) // hope this works
    })
    .then(response => response.json())
    .then(key => {
      resetText(`${window.location.origin}/${key.link}`);
      console.log(key.link)});
  }

  function copyToClipboard() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(text);
  }
  
  return(
    <div class='output-container'>
        <div><button onClick={fetchLink}>Generate</button></div>
        <div onClick={copyToClipboard} id='generatedLink'>{text}</div>
    </div>
  ); 
}


export default GeneratorCreator;