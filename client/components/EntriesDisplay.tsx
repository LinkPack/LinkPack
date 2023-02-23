import React from 'react';
import Entry from '../components/Entry.jsx'
import {connect} from 'react-redux';

function EntriesDisplay(props: {entries: {keyId: string, label: string, link: string}[]}) {

  const allEntries = [];
  for(let i = 0; i < props.entries.length; i++) {
    allEntries.push(<Entry keyId={props.entries[i].keyId} label={props.entries[i].label} link={props.entries[i].link}/>)
  }
  console.log('im props.entries in display',props.entries)


  return(
    <div className='display-box'>
      {allEntries}
    </div>
  ); 
}

// const mapStateToProps = state => ({
//   entries: state.entries,
// });

export default (EntriesDisplay);