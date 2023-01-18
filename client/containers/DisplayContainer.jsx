import React from 'react';
import { useSelector } from 'react-redux';

function DisplayContainer(props) {
  //fetch to receive all links
  const entries = useSelector(state => state.linkPack.entries);
  console.log('entries: ', entries);
  console.log('window.location.href', window.location.pathname);

  async function getEntries () {
    const response = await fetch(`getList/${window.location.pathname}`);
    const data = response.json();
    return data;
  }

  

  return(
    <div id='displayContainer'>
        Hi
    </div>
  ); 
}


export default DisplayContainer;