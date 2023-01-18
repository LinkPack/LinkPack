import React from 'react';
import GeneratorContainer from './GeneratorContainer.jsx';
import EntriesContainer from './EntriesContainer.jsx';
import {connect} from 'react-redux';
import { addEntryActionCreator } from '../actions/actions.js'

function MainContainer(props) {
  const handleClick = (label, link, keyId) => {
    props.newEntry(label,link, keyId);
  }

  return(
    <main>
      <h1>LINKPACK</h1>
      <EntriesContainer onClick={handleClick} entries={props.linkPack.entries}/>
      <GeneratorContainer entries={props.linkPack.entries}/> 

    </main>
  ); 
};

const mapStateToProps = state => ({
  linkPack: state.linkPack,
});
const mapDispatchToProps = dispatch => (
  {
    newEntry: (label, link, keyId) => dispatch(addEntryActionCreator(label, link, keyId))
  
  }
);


export default  connect(mapStateToProps,mapDispatchToProps)(MainContainer);
