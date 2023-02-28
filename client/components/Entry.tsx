import React from 'react';
import {connect} from 'react-redux';
import { deleteEntryActionCreator } from '../actions/actions'
import { AppDispatch } from '../store';

function Entry(props: { keyId: string, label: string, link: string, deleteEntry: Function }) {
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
const mapDispatchToProps = (dispatch: AppDispatch) => (
  {
    deleteEntry: (keyId: string) => dispatch(deleteEntryActionCreator(keyId))
  }
);


export default connect(null,mapDispatchToProps)(Entry);