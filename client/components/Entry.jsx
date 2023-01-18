import React from 'react';

function Entry({id, link, label}) {

  return(
    <div>
      <div>{label}</div>
      <div>{link}</div>
      <button>-</button>
    </div>
  ); 
}


export default Entry;