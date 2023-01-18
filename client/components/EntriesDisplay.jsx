import React from 'react';
import Entry from '../components/Entry.jsx'
import {connect} from 'react-redux';

function EntriesDisplay(props) {

   const allEntries = [];
  for(let i = 0; i < props.entries.length; i++) {
    allEntries.push(<Entry id={props.entries[i].id} label={props.entries[i].label} link={props.entries[i].link}/>)
  }
  console.log('im props.entries in display',props.entries)

  return(
    <div class='box'>

      hello
      {allEntries}
    </div>
  ); 
}

// const mapStateToProps = state => ({
//   entries: state.entries,
// });

export default (EntriesDisplay);