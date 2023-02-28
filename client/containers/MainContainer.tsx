import React from 'react';
import GeneratorContainer from './GeneratorContainer';
import EntriesContainer from './EntriesContainer';
import {connect} from 'react-redux';
import { addEntryActionCreator } from '../actions/actions.js'
import { AppDispatch, RootState } from '../store';

function MainContainer(props: {newEntry: Function, linkPack: {entries: []}}) {
  const handleClick = (label: string, link: string, keyId: string) => {
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

const mapStateToProps = (state: RootState) => ({
  linkPack: state.linkPack,
});
const mapDispatchToProps = (dispatch: AppDispatch) => (
  {
    newEntry: (label: string, link: string, keyId: string) => dispatch(addEntryActionCreator(label, link, keyId))
  }
);


export default  connect(mapStateToProps,mapDispatchToProps)(MainContainer);
