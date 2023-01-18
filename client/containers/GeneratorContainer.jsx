import React from 'react';
import GeneratorCreator from '../components/GeneratorCreator.jsx';

function GeneratorContainer(props) {

  return(
    <div id='genBox'>
        <p>Package your links!</p>
        <GeneratorCreator entries={props.entries} />
    </div>
  ); 
}


export default GeneratorContainer;