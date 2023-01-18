import React from 'react';
import GeneratorCreator from '../components/GeneratorCreator.jsx';

function GeneratorContainer(props) {

  return(
    <div id='gen-box'>
        <p>Package your links!</p>
        <GeneratorCreator entries={props.entries} />
    </div>
  ); 
}


export default GeneratorContainer;