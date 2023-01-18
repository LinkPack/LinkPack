import React from 'react';
import {connect} from 'react-redux';
import { deleteEntryActionCreator } from '../actions/actions.js'

function Entry(props) {
console.log('im props in entry', props)
  const deleteEntry = () => {
    console.log('im in delete', props.keyId)
    props.deleteEntry(props.keyId);
    
  }
  return(
    <div className='entry-box'>
      <div className='label link-bubble'>{props.label}</div>
      <div className='link link-bubble'>{props.link}</div>
      <button onClick={deleteEntry}>-</button>
    </div>
  ); 
}
const mapDispatchToProps = dispatch => (
  {
    deleteEntry: keyId => dispatch(deleteEntryActionCreator(keyId))
  
  }
);


export default connect(null,mapDispatchToProps)(Entry);