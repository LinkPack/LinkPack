import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEntriesActionCreator } from '../actions/actions';

async function DisplayContainer(props) {
  //fetch to receive all links
  // const entries = useSelector(state => state.linkPack.entries);
  // console.log('entries: ', entries);
  // console.log('window.location.href', window.location.pathname);

  // const dispatch = useDispatch();
  let entries = {};
  // useEffect(() => {
  //   console.log('begining of useEffect')
  //   async function getEntries () {
  //     try {
  //       const response = await fetch(`getList/${window.location.pathname}`);
  //       const data = await response.json();
  //       console.log(data)
  //       return data;
  //     }
  //     catch{
  //       console.log('error in displayContainer')
  //     }
  //   }
  //   entries = getEntries();
  //   console.log('entries in useEffect');
  //   // dispatch(getEntriesActionCreator(data));
  //   // entries = useSelector(state => state.generatedLinkPack.entries)
  //   // console.log('state from displayContainer: ', entries);
  // })

  return(
    <div id='displayContainer'>
      DisplayContainer
    </div>
  ); 
}


export default DisplayContainer;