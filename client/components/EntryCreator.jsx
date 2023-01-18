import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useInput } from '../hooks.js';
import {connect} from 'react-redux';
import { addEntryActionCreator } from '../actions/actions.js'

function EntryCreator(props) {
  const [label, labelOnChange, resetLabel] = useInput('');
  const [link, linkOnChange, resetLink] = useInput('');

  const handleButtonClick = () => {
    //console.log(label, link);

    // dispatch add entry
    // fetch('/sendLink', {
    //   method: POST,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({label, link}) // hope this works
    // })
    // .then(response => response.json())
    // .then(id => props.newEntry(label, link, id));
    props.onClick(label,link,1);

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