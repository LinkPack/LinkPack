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
    .then(key => console.log(key.link));
  }
  
  return(
    <div>
        <TextField id="outlined-basic" label="LinkPack" variant="outlined" onChange={textOnChange}  value={text}/>
        <button onClick={fetchLink}>Generate</button>
    </div>
  ); 
}


export default GeneratorCreator;