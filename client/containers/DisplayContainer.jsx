import React from 'react';
import { useSelector } from 'react-redux';

function DisplayContainer(props) {
  //fetch to receive all links
  const entries = useSelector(state => state.linkPack.entries);
  console.log('entries: ', entries);

  return(
    <div id='displayContainer'>
        Hi
    </div>
  ); 
}


export default DisplayContainer;