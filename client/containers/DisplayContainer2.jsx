import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEntriesActionCreator } from '../actions/actions.js'
import DisplayEntry from '../components/DisplayEntry.jsx';

function DisplayContainer2(props) {
  
    //fetch to receive all links
    // const entries = useSelector(state => state.linkPack.entries);
    // console.log('entries: ', entries);
    // console.log('window.location.href', window.location.pathname);
  
    // const dispatch = useDispatch();
    const dispatch = useDispatch();
    useEffect(() => {
      console.log('begining of useEffect')
      async function getEntries () {
        try {
          const response = await fetch(`getList/${window.location.pathname}`);
          const data = await response.json();
          console.log(data)
          dispatch(getEntriesActionCreator(data));
          return data;
        }
        catch{
          console.log('error in displayContainer')
        }
      }
      getEntries();
    }, [])
  

  const info = [];
  const entries = useSelector(state => state.generatedLinkPack.entries)
  console.log(entries)
  for (let i = 0; i < entries.length; i++) {
    info.push(<DisplayEntry label={entries[i].label} link={entries[i].link}/>)
  }

  return(
    <div>
        DisplayContainer2
        <>
          {info}
        </>
    </div>
  ); 
}




export default DisplayContainer2;