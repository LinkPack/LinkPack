import React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {useInput} from '../hooks.js'




function GeneratorCreator(props) {
  
  const [text, textOnChange, resetText] = useInput('');
  const fetchLink = () => {
    if (text) return;
    
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
    const copiedBanner = document.querySelector('.copiedBanner');
    copiedBanner.style.display = 'block';
    copiedBanner.style.opacity = '1';
    setTimeout(hide, 500)
  }

  function hide() {
    const copiedBanner = document.querySelector('.copiedBanner');
    copiedBanner.style.opacity = '0';
    setTimeout(reshow, 500)
  }
  function reshow() {
    const copiedBanner = document.querySelector('.copiedBanner');
    copiedBanner.style.display = 'none';
    copiedBanner.style.opacity = '1';
  }
  
  return(
    <div className='output-container'>
      <div className='copiedBanner'>copied to clipboard</div>
      <button onClick={fetchLink}>Generate</button>
      <div onClick={copyToClipboard} id='generatedLink'>{text}</div>
    </div>
  ); 
}


export default GeneratorCreator;