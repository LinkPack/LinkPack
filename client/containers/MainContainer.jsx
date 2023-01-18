import React from 'react';
import GeneratorContainer from './GeneratorContainer.jsx';
import EntriesContainer from './EntriesContainer.jsx';
import {connect} from 'react-redux';
import { addEntryActionCreator } from '../actions/actions.js'

function MainContainer(props) {
  const handleClick = (label, link, key) => {
    props.newEntry(label,link, key);
  }

  return(
    <div>
      <button onClick={(() => props.navigate('/l'))}>Navigate</button>
      MainContainer!
     <EntriesContainer onClick={handleClick} entries={props.linkPack.entries}/>
     <GeneratorContainer entries={props.linkPack.entries}/> 

    </div>
  ); 
};

const mapStateToProps = state => ({
  linkPack: state.linkPack,
});
const mapDispatchToProps = dispatch => (
  {
    newEntry: (label, link, key) => dispatch(addEntryActionCreator(label, link, key))
  
  }
);


export default  connect(mapStateToProps,mapDispatchToProps)(MainContainer);
