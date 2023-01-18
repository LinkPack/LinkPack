import React from 'react';
import EntryCreator from '../components/EntryCreator.jsx'
import EntriesDisplay from '../components/EntriesDisplay.jsx';


function EntriesContainer(props) {

  return(
    <div>
        <EntryCreator onClick={props.onClick} entries={props.entries} />
        <EntriesDisplay entries={props.entries}/>
    </div>
  ); 
}




export default (EntriesContainer);
