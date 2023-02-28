import React from 'react';
import GeneratorCreator from '../components/GeneratorCreator';

function GeneratorContainer(props: {entries: []}) {

  return(
    <div id='gen-box'>
        <p>Package your links!</p>
        <GeneratorCreator entries={props.entries} />
    </div>
  ); 
}


export default GeneratorContainer;