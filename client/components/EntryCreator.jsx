import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useInput } from '../hooks.js';
import short from 'short-uuid';

function EntryCreator(props) {
  const [label, labelOnChange, resetLabel] = useInput('');
  const [link, linkOnChange, resetLink] = useInput('');

  const handleButtonClick = async () => {


    const key = short.generate();
    console.log('i gen key', key);

    props.onClick(label,link,key);

    resetLabel();
    resetLink();
    console.log("hello");
  }
  
  return(
    <div>
      <p>Enter your links here</p>
      <TextField id="outlined-basic" label="Label" variant="outlined" value={label} onChange={labelOnChange} />
      <TextField id="outlined-basic" label="Link" variant="outlined" value={link} onChange={linkOnChange} />
      <button onClick={handleButtonClick}>Add Link </button>
    </div>
  ); 
};





export default (EntryCreator);