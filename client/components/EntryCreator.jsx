import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useInput } from '../hooks.js';
import short from 'short-uuid';

function EntryCreator(props) {
  const [label, labelOnChange, resetLabel] = useInput('');
  const [link, linkOnChange, resetLink] = useInput('');

  const handleButtonClick = async () => {


    const keyId = short.generate();
    console.log('i gen key', keyId);

    props.onClick(label,link,keyId);

    resetLabel();
    resetLink();
    console.log("hello");
  }
  
  return(
    <div>
      
      <p>LinkPack will package all entered links and give you a short link to send to all your friends.</p>
      <h3>Enter your links here</h3>
      <TextField id="outlined-basic" label="Label" variant="outlined" value={label} onChange={labelOnChange} />
      <TextField id="outlined-basic" label="Link" variant="outlined" value={link} onChange={linkOnChange} />
      <button onClick={handleButtonClick}>Add Link </button>
    </div>
  ); 
};





export default (EntryCreator);