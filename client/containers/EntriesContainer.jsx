import React from 'react';
import EntryCreator from '../components/EntryCreator'
import EntriesDisplay from '../components/EntriesDisplay';


function EntriesContainer(props) {

  return(
    <div>
        <p>LinkPack will package all entered links and give you a short link to send to all your friends.</p>
        <h3>Enter your links here</h3>
        <EntryCreator onClick={props.onClick} entries={props.entries} />
        <EntriesDisplay entries={props.entries}/>
    </div>
  ); 
}




export default (EntriesContainer);
